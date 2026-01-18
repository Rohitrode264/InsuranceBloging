import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { Blog } from '../module/Blog';

const router = express.Router();

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Multer setup for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Admin Login (Simple secret check)
router.post('/admin/login', (req, res) => {
    const { secret } = req.body;
    if (secret === process.env.ADMIN_SECRET) {
        res.json({ success: true, token: 'admin-token-123' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid Secret' });
    }
});

// Get Blogs
router.get('/blogs', async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};
        if (category) {
            query = { category };
        }
        const blogs = await Blog.find(query).sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
    }
});

// Post Blog
router.post('/blogs', upload.single('image'), async (req: any, res: any) => {
    try {
        const { title, content, category } = req.body;
        const file = req.file;

        if (!file) return res.status(400).json({ error: 'No image provided' });

        // Upload to Cloudinary
        const result = await new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'jivansecure-blogs' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            uploadStream.end(file.buffer);
        });

        const newBlog = new Blog({
            title,
            content,
            category,
            image: result.secure_url
        });

        await newBlog.save();
        res.json(newBlog);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create blog' });
    }
});

export = router;

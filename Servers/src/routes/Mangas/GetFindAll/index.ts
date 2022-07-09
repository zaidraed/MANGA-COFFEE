import { Router } from 'express';
import Manga from '../../../models/Mangas/Manga.js';
const router = Router();

router.get('/', async(_req, res, next) => {    
    try { 
        const mangas = await Manga.find({}, ["title", "genres", "cover_image"])
        res.status(200).json(mangas)
    } catch (error) {
        next(error)
    }
})

export default router;
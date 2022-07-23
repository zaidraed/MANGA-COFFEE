"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_extra_1 = __importDefault(require("fs-extra"));
const passport_1 = __importDefault(require("passport"));
const Manga_js_1 = __importDefault(require("../../../models/Mangas/Manga.js"));
const User_js_1 = __importDefault(require("../../../models/Users/User.js"));
const index_js_1 = require("../../../config/Cloudinary/index.js");
const index_js_2 = require("../../../middlewares/FileUpload/index.js");
const index_js_3 = __importDefault(require("../../../controles/Token/ReadTokenData/index.js"));
const router = (0, express_1.Router)();
router.put('/admin/addchapter', passport_1.default.authenticate("jwt", { session: false }), (0, index_js_2.FilesImage)(), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { idManga, chapter } = req.body;
    const { authorization } = req.headers;
    let { books } = req.files;
    try {
        const data = (0, index_js_3.default)(authorization);
        const user = yield User_js_1.default.findById(data.id);
        if (user && user.admin) {
            if ((_a = req.files) === null || _a === void 0 ? void 0 : _a.books) {
                const mangainfo = yield Manga_js_1.default.findById(idManga);
                if (mangainfo) {
                    let link = [];
                    let folderpath = `Mangas/${mangainfo.title}/chapter${chapter}`;
                    for (let i = 0; i < books.length; i++) {
                        let linkClaudinary = yield (0, index_js_1.Uploadimage)(books[i].tempFilePath, folderpath);
                        yield fs_extra_1.default.unlink(books[i].tempFilePath);
                        link.push(linkClaudinary.secure_url);
                    }
                    let mangas = {
                        chapter: chapter,
                        link: link
                    };
                    yield Manga_js_1.default.findByIdAndUpdate((idManga), { $push: { mangas: mangas } });
                    res.status(200).json('El capitulo de su manga se Agrego con Exito!');
                }
            }
            else {
                res.status(400).json("Informacion incompleta");
            }
        }
        else {
            res.status(400).json("No cuentas con autorizacion");
        }
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./Mangas/GetByName/index"));
const index_2 = __importDefault(require("./Mangas/PostManga/index"));
const index_3 = __importDefault(require("./Mangas/GetFindAll/index"));
const index_4 = __importDefault(require("./Mangas/GetById/index"));
const index_5 = __importDefault(require("./Mangas/DeleteById/index"));
const index_6 = __importDefault(require("./Mangas/FilterByGenre/index"));
const index_7 = __importDefault(require("./Mangas/PatchComments/index"));
const index_8 = __importDefault(require("./Users/PostUserCreated/index"));
const index_9 = __importDefault(require("./Users/PostUserinit/index"));
const index_10 = __importDefault(require("./Users/GetByIdUser/index"));
const index_11 = __importDefault(require("./Users/PutByIdUser/index"));
const index_12 = __importDefault(require("./Users/PutByIdUserFav/index"));
const index_13 = __importDefault(require("./Users/GetMangaFavoUser/index"));
const index_14 = __importDefault(require("./Users/DeleteFavorites/index"));
const index_15 = __importDefault(require("./Users/AdminPostSendMailFindAll/index"));
const index_16 = __importDefault(require("./Users/GetConfirmarCuenta/index"));
const index_17 = __importDefault(require("./Users/DisabledUser/index"));
const index_18 = __importDefault(require("./Products/DeleteByIdProducts/index"));
const index_19 = __importDefault(require("./Products/FilterByIdProducts/index"));
const index_20 = __importDefault(require("./Products/FilterByNameProducts/index"));
const index_21 = __importDefault(require("./Products/GetFindAllProducts/index"));
const index_22 = __importDefault(require("./Products/PostProducts/index"));
const index_23 = __importDefault(require("./Products/FilterByCategory/index"));
const index_24 = __importDefault(require("./Products/PutProducts/index"));
const index_25 = __importDefault(require("./Products/PostCommentsProducts/index"));
const index_26 = __importDefault(require("./Products/PostBuyStripe/index"));
const index_27 = __importDefault(require("./Products/AddWishListProducts/index"));
const index_28 = __importDefault(require("./Mangas/PutManga/index"));
const index_29 = __importDefault(require("./Mangas/GetByFavorites/index"));
const index_30 = __importDefault(require("./Mangas/DeleteComments/index"));
const index_31 = __importDefault(require("./Mangas/postRating/index"));
const index_32 = __importDefault(require("./Products/DeleteItemsWishlistProducts/index"));
const index_33 = __importDefault(require("./Users/PostResetPass/index"));
const index_34 = __importDefault(require("./Users/PutResetPass/index"));
const index_35 = __importDefault(require("./Users/PutResetUser/index"));
const index_36 = __importDefault(require("./Users/AdminGetFinAllUser/index"));
const index_37 = __importDefault(require("./Users/AdminPutAdminUser/index"));
const index_38 = __importDefault(require("./Users/AdminPutBlockUser/index"));
const index_39 = __importDefault(require("./Users/AdminPutStatusUser/index"));
const index_40 = __importDefault(require("./Products/PutStock/index"));
const index_41 = __importDefault(require("./Products/PutRating/index"));
const index_42 = __importDefault(require("./Products/GetWishList/index"));
const index_43 = __importDefault(require("./Users/AdminPostSendMailUser/index"));
const index_44 = __importDefault(require("./Mangas/AdminAddChapterManga/index"));
const index_45 = __importDefault(require("./Users/AdminGetFindAllForFilters/index"));
const index_46 = __importDefault(require("./Users/PostCart/index"));
const index_47 = __importDefault(require("./Users/GetCart/index"));
const index_48 = __importDefault(require("./Users/AdminGetFindAllHistoryBuy/index"));
const index_49 = __importDefault(require("./Users/AdminGetByIdHistoryBuy/index"));
const index_50 = __importDefault(require("./Users/PutCart/index"));
const index_51 = __importDefault(require("./Users/DeleteCart/index"));
const router = (0, express_1.Router)();
router.use('/manga', index_6.default);
router.use('/manga', index_3.default);
router.use('/manga', index_1.default);
router.use('/manga', index_4.default);
router.use('/manga', index_2.default);
router.use('/manga', index_5.default);
router.use('/manga', index_30.default);
router.use('/manga', index_7.default);
router.use('/manga', index_28.default);
router.use('/manga', index_29.default);
router.use('/manga', index_31.default);
router.use('/manga', index_44.default);
router.use('/user', index_17.default);
router.use('/user', index_15.default);
router.use('/user', index_51.default);
router.use('/user', index_14.default);
router.use('/user', index_8.default);
router.use('/user', index_9.default);
router.use('/user', index_10.default);
router.use('/user', index_11.default);
router.use('/user', index_12.default);
router.use('/user', index_47.default);
router.use('/user', index_13.default);
router.use('/user', index_16.default);
router.use('/user', index_46.default);
router.use('/user', index_50.default);
router.use('/user', index_33.default);
router.use('/user', index_34.default);
router.use('/user', index_35.default);
router.use('/user', index_36.default);
router.use('/user', index_37.default);
router.use('/user', index_38.default);
router.use('/user', index_39.default);
router.use('/user', index_43.default);
router.use('/user', index_45.default);
router.use('/user', index_49.default);
router.use('/user', index_48.default);
router.use('/products', index_42.default);
router.use('/products', index_18.default);
router.use('/products', index_19.default);
router.use('/products', index_20.default);
router.use('/products', index_21.default);
router.use('/products', index_22.default);
router.use('/products', index_23.default);
router.use('/products', index_24.default);
router.use('/products', index_24.default);
router.use('/products', index_25.default);
router.use('/products', index_26.default);
router.use('/products', index_27.default);
router.use('/products', index_32.default);
router.use('/products', index_40.default);
router.use('/products', index_41.default);
exports.default = router;

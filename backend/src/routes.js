const { Router } = require("express");
const multer = require("multer");
const auth = require("./api/middlewares/auth");
const isAdmin = require("./api/middlewares/isAdmin");
const uploadConfig = require("../config/uploads");
const upload = multer(uploadConfig);
const { ROUTESPATH } = require("./utils/getTypes");
const router = Router();

const { createStateController } = require("./api/useCase/State/CreateState");
const {
  listCityByStateController,
} = require("./api/useCase/State/ListCityByState");
const { findAllTypesController } = require("./api/useCase/Type/FindAllTypes");
const { createUserController } = require("./api/useCase/User/CreateUser");
const {
  authenticateUserController,
} = require("./api/useCase/User/FindUserEmail");
const { showAllUsersController } = require("./api/useCase/User/ShowAllUsers");
const { findByIdUserController } = require("./api/useCase/User/FindByIdUser");
const { removeUserController } = require("./api/useCase/User/RemoveUser");
const { updateUserController } = require("./api/useCase/User/UpdateUser");
const { listGenreController } = require("./api/useCase/Genre/ListGenre");
const {
  listIndicateClassificationController,
} = require("./api/useCase/IndicateClassification/ListIndicateClassification");
const { createFilmController } = require("./api/useCase/Film/CreateFilm");
const { deleteFilmController } = require("./api/useCase/Film/DeleteFilm");
const { findByIdFilmController } = require("./api/useCase/Film/FindByIdFilm");
const { updateFilmController } = require("./api/useCase/Film/UpdateFilm");
const { showAllFimlController } = require("./api/useCase/Film/ShowAllFilms");
const {
  showAllFilmByGenresController,
} = require("./api/useCase/Film/ShowFilmByGenres");
const {
  filterFilmsByNameAndGenreAndindicateClassificationController,
} = require("./api/useCase/Film/filterFilmsByNameAndGenreAndindicateClassification");
const {
  insertFilmListController,
} = require("./api/useCase/ListWatched/CheckListAlreadyExists");
const {
  removeFilmListController,
} = require("./api/useCase/ListWatched/RemoveFilmList");
const {
  showAllFilmsInListController,
} = require("./api/useCase/ListWatched/ShowAllFilmsInList");
const {
  insertFimllistFavoriteController,
} = require("./api/useCase/ListFavorite/InsertFilmToList");
const {
  removeFimllistFavoriteController,
} = require("./api/useCase/ListFavorite/RemoveFilmToList");
const {
  listFilmsListFavoriteController,
} = require("./api/useCase/ListFavorite/ListFilmsListFavorite");
const {
  watchFavoriteFilmController,
} = require("./api/useCase/ListFavorite/FilmToWatched");
const {
  showLoggedUserProfileController,
} = require("./api/useCase/Profile/ShowLoggedUserProfile");

router.get("/health", (_, res) =>
  res.status(200).json({
    serverStatus: "server up",
  })
);

//--auth routes --//
router.post(
  `${ROUTESPATH.AUTHENTICATE}`,
  authenticateUserController.handle.bind(authenticateUserController)
);

//--state routes--//
router.post(
  `${ROUTESPATH.STATES}`,
  auth,
  createStateController.handle.bind(createStateController)
);

router.get(
  `${ROUTESPATH.STATES}/:id`,
  auth,

  listCityByStateController.handle.bind(listCityByStateController)
);

//--types routes --//
router.get(
  `${ROUTESPATH.TYPES}`,
  auth,
  findAllTypesController.handle.bind(findAllTypesController)
);

//--users routes --//
router.post(
  `${ROUTESPATH.USERS}`,
  auth,
  isAdmin,
  createUserController.handle.bind(createUserController)
);

router.get(
  `${ROUTESPATH.USERS}`,
  auth,
  isAdmin,
  showAllUsersController.handle.bind(showAllUsersController)
);

router.get(
  `${ROUTESPATH.USERS}/:id`,
  auth,
  isAdmin,
  findByIdUserController.handle.bind(findByIdUserController)
);

router.delete(
  `${ROUTESPATH.USERS}/:id`,
  auth,
  isAdmin,
  removeUserController.handle.bind(removeUserController)
);

router.put(
  `${ROUTESPATH.USERS}/:id`,
  auth,
  isAdmin,
  updateUserController.handle.bind(updateUserController)
);
//--genre routes---//
router.get(
  `${ROUTESPATH.GENRE}`,
  auth,
  listGenreController.handle.bind(listGenreController)
);
//--indicate classification --//
router.get(
  `${ROUTESPATH.INDICATECLASSIFICATION}`,
  auth,
  isAdmin,
  listIndicateClassificationController.handle.bind(
    listIndicateClassificationController
  )
);
//--films routes---//
router.post(
  `${ROUTESPATH.FILMS}`,
  auth,
  isAdmin,
  upload.single("image"),
  createFilmController.handle.bind(createFilmController)
);

router.get(
  `${ROUTESPATH.FILMS}/:id`,
  auth,
  findByIdFilmController.handle.bind(findByIdFilmController)
);

router.delete(
  `${ROUTESPATH.FILMS}/:id`,
  auth,
  isAdmin,
  deleteFilmController.handle.bind(deleteFilmController)
);

router.put(
  `${ROUTESPATH.FILMS}/:id`,
  auth,
  isAdmin,
  upload.single("image"),
  updateFilmController.handle.bind(updateFilmController)
);

router.get(
  `${ROUTESPATH.FILMS}`,
  auth,
  isAdmin,
  showAllFimlController.handle.bind(showAllFimlController)
);

router.get(
  `${ROUTESPATH.FILMS}${ROUTESPATH.GENRE}/:genre`,
  auth,
  showAllFilmByGenresController.handle.bind(showAllFilmByGenresController)
);

router.get(
  `/filter${ROUTESPATH.FILMS}`,
  auth,
  filterFilmsByNameAndGenreAndindicateClassificationController.handle.bind(
    filterFilmsByNameAndGenreAndindicateClassificationController
  )
);

//--listWatch routes --//
router.post(
  `${ROUTESPATH.LISTWATCHED}`,
  auth,
  insertFilmListController.handle.bind(insertFilmListController)
);

router.delete(
  `${ROUTESPATH.LISTWATCHED}`,
  auth,
  removeFilmListController.handle.bind(removeFilmListController)
);

router.get(
  `${ROUTESPATH.LISTWATCHED}`,
  auth,
  showAllFilmsInListController.handle.bind(showAllFilmsInListController)
);

//--listFavorites routes --//
router.post(
  `${ROUTESPATH.LISTFAVORITE}`,
  auth,
  insertFimllistFavoriteController.handle.bind(insertFimllistFavoriteController)
);

router.delete(
  `${ROUTESPATH.LISTFAVORITE}`,
  auth,
  removeFimllistFavoriteController.handle.bind(removeFimllistFavoriteController)
);

router.get(
  `${ROUTESPATH.LISTFAVORITE}`,
  auth,
  listFilmsListFavoriteController.handle.bind(listFilmsListFavoriteController)
);

router.put(
  `${ROUTESPATH.LISTFAVORITE}`,
  auth,
  watchFavoriteFilmController.handle.bind(watchFavoriteFilmController)
);

//--profile routes --//
router.get(
  `${ROUTESPATH.PROFILE}`,
  auth,
  showLoggedUserProfileController.handle.bind(showLoggedUserProfileController)
);

module.exports = { router };


import {initForm} from "./form/form.js";
import "./assets/style/form.scss";
import {initUsers} from "./users/user";
import "./assets/style/users.scss";
import {initRouter} from "./form/router";
initRouter();
initForm();

initUsers();


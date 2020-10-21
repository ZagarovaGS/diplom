
import {initForm} from "./form/form.js";
import "./assets/style/form.scss";
import {initUsers} from "./users/user.js";
import "./assets/style/users.scss";
import {initServerList} from "./server_list/server_list.js";
//initServerList вроде здесь нет необходимости вызывать
initServerList();
//import {initRouter} from "./router";
initForm();

initUsers();


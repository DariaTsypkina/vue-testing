import { createStore } from "vuex";
import { postModule } from "./postModule";

export default createStore({
    // state: {
    //     likes: 1,
    //     isAuth: false,
    // },

    // // computed свойства
    // getters: {
    //     doubleLikes(state) {
    //         return state.likes * 2; 
    //     }
    // },

    // // для изменения состояния
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes += 1;
    //     },
    //     decrementLikes(state) {
    //         state.likes -= 1;
    //     }
    // },

    // // функции, которые внутри себя используют мутации
    // // внутри делаем сайд эффекты, данные с сервера получаем и сохраняем в состоянии
    // actions: {

    // },

    modules: {
        post: postModule
    }
})
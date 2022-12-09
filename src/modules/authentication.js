import {loginUser} from '@/services/user-service'


const Token = 'token';
const Email = 'email';
const Name = 'name';

const auth = {
    
    state: {
        
        token:localStorage.getItem(Token) || '',
        email:localStorage.getItem(Email)|| '',
        name:localStorage.getItem(Name) || ''
    },
    getters:{
        isAurhenticated(state){
            return state.token !==''
        },
        userEmail(state){
            return state.email;
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token;
        },
        setEmail(state, email){
            state.email = email;
        },
        setName(state, name){
            state.name = name;
        }
    },
    actions:{
        async loginUser({commit}, credentials){
            const data = await loginUser(credentials);
            const {token, email, name}= data;
            localStorage.setItem(Token, token);
            localStorage.setItem(Email, email);
            localStorage.setItem(Name, name);

            commit('setToken', token);
            commit('setEmail', email);
            commit('setName', name);
            return true;
        },
        logoutUser({commit}){
            commit('setToken', '');
            commit('setEmail', '');
            commit('setName', '');
            localStorage.removeItem(Token);
            localStorage.removeItem(Email);
            localStorage.removeItem(Name);
        }
    }
}

export default auth;
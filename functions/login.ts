

const correctUserName = ["さき", "さきちゃん", "ゆうと", "ゆとゆと"];
const correctPassword = "いつもありがとう";

const login = (userName: string, password: string) => {
    if (!correctUserName.includes(userName) || password !== correctPassword) {
        return false;
    }

    return true;
};

export default login;
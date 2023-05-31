export const isBrowser = () => typeof window != "undefined"

export const getUser = () =>{
	if (isBrowser() && window.localStorage.getItem("gatsbyUser")) {
		return JSON.parse(window.localStorage.getItem("gatsbyUser"))
	}}

export const getStorage = (entry) => {
  if (isBrowser() && window.localStorage.getItem(entry)) {
    return JSON.parse(window.localStorage.getItem(entry));
  }
};

export const getStorageList = (entry) => {
  if (isBrowser() && window.localStorage.getItem(entry)) {
    return JSON.parse(window.localStorage.getItem(entry));
  }
};

export const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `john` && password === `pass`) {
    return setUser({
		email: `john`,
      password: `Johnny`,
    })
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  if (user) {
	  return true;
  }else{
	  return false
  }
  
}
export const logout = () => {
	window.localStorage.clear()
}
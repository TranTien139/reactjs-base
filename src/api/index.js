let apiUrl = "http://localhost:3000/"

switch (process.env.REACT_APP_ENV) {
  case 'production' : {
    apiUrl = ''
    break
  }

  case 'development' : {
    apiUrl = ''
    break
  }

  default : {
    apiUrl = ''
    break
  }
}

export const loginUser = apiUrl  + 'login'

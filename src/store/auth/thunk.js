import { singInWithGoogle } from "../../firebase/provider";
import { checkingCredentials } from "./authSlice"

export const checkingAuthentication = (/* {username, password} */) => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
      dispatch(checkingCredentials());
  
      const result = await singInWithGoogle();
      console.log(result)
/*       if( !result.ok ) return dispatch( logout(result.errorMessage) );
  
      dispatch( login(result)) */
    };
  };
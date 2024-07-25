import { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { IOS_ID, ANDROID_ID, CLIENT_ID } from '@env';

WebBrowser.maybeCompleteAuthSession();

const useOauthentication = () => {
  const [request, response, promptAsync] = Google.useAuthRequest(
    {
      iosClientId: IOS_ID,
      androidClientId: ANDROID_ID,
      expoClientId: CLIENT_ID,
      redirectUri: makeRedirectUri({
        scheme: 'haulXpress',
      }),
    },
    {},
  );

  useEffect(() => {
    //check if the signIn prompt was successful
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credentials = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credentials);
    }
  }, [response]);

  return [promptAsync];
};

export default useOauthentication;

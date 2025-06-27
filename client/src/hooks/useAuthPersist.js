// Create: client/src/hooks/useAuthPersist.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';

export const useAuthPersist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check localStorage on app load
    const checkAuthState = () => {
      try {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
          const parsedUserInfo = JSON.parse(userInfo);
          // Validate that the user info has required fields
          if (parsedUserInfo && parsedUserInfo.userId) {
            dispatch(setCredentials(parsedUserInfo));
          } else {
            // Clean up invalid data
            localStorage.removeItem('userInfo');
          }
        }
      } catch (error) {
        console.error('Error restoring auth state:', error);
        localStorage.removeItem('userInfo');
      }
    };

    checkAuthState();
  }, [dispatch]);
};
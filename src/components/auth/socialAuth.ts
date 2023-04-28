function handleSocialLogin(link: string, features: string) {
  // open /api-wrapper/auth/google-login in a new window and store the window reference
  const popup = window.open(link, '_blank', features);

  // poll the child window's location every 500ms
  const intervalId = setInterval(() => {
    try {
      // if the child window's location is not the same as the parent window's location
      if (popup.location.href !== window.location.href) {
        // check if cookie is set
        if (!document.cookie.includes('token')) return;

        // add closed event listener to the child window
        popup.addEventListener('beforeunload', () => {
          // do something before closing the child window
          console.log('Closing login window...');

          // redirect to home page
          window.location.href = '/home';
        });

        // close the child window
        popup.close();

        // do something after successful login
        console.log('Login successful!');

        // stop polling
        clearInterval(intervalId);
      }
    } catch (e) {
      // do nothing
    }
  }, 500);
}

export function handleGoogleLogin() {
  // get the current monitor size
  const { width, height } = window.screen;

  const top = height / 2 - 350;
  const left = width / 2 - 225;

  const features = `scrollbars=no,resizable=no,status=no,location=no,
  toolbar=no,menubar=no,width=500,height=700,left=${left},top=${top}`;

  // open /api-wrapper/auth/google-login in a new window and store the window reference
  handleSocialLogin('/api/auth/google-login', features);
}

export function handleGitHubLogin() {
  // get the current monitor size
  const { width, height } = window.screen;

  const top = height / 2 - 350;
  const left = width / 2 - 250;

  const features = `scrollbars=no,resizable=no,status=no,location=no,
  toolbar=no,menubar=no,width=500,height=700,left=${left},top=${top}`;

  handleSocialLogin('/api/auth/github-login', features);
}

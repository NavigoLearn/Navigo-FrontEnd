function handleSocialLogin(link: string, features: string) {
  // open custom html in a new window and store the window reference
  const popup = window.open("/", '_blank', features);

  function loginSuccess() {
    // do something after login
    console.log('login success');

    // close the child window
    popup.close();

    // redirect to the home page
    window.location.href = '/';
  }
  // write custom html to the child window
  popup.document.write(`
    <html>
      <head>
        <title>Authenticating...</title>
        
        <style>
          body {
            margin: 0;
          }
          
          iframe {
            width: 100vw;
            height: 100vh;
            border: none;
            max-width: 100%;
          }
        </style>
        
        <script>
        // get iframe element
        const iframe = document.getElementById('loginframe');
        //wait for the child window to get to the local domain
        const intervalId = setInterval(() => {
          try {
            // if the child window's location is not the same as the parent window's location
            if (popup.location.href !== window.location.href) {
                return;
            }
            
            // check if cookie is set
            if (!document.cookie.includes('token')) return;
            
            // call parent window's function
            window.opener.loginSuccess();
          } catch (e) {
            // if the child window is not on the same domain as the parent window
            // then the child window's location will throw an error
            return;
          }
        }, 100);
        </script>
      </head>
      <body>
        <iframe src="${link}" id="loginframe"></iframe>
      </body>
    </html>`);
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

export async function handleLogout() {
  // makes call to api for logout
  const response = await fetch('/api/auth/logout', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response);

  // reload page
  window.location.reload();
}

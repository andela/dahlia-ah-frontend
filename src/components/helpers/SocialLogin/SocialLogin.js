import React from 'react';
import './SocialLogin.scss';
import AppConfig from '../../../config/appConfig';

const { BACKEND_PATH } = AppConfig;

const SocialLogin = () => (
  <div>
    <a href={`${BACKEND_PATH}/oauth/facebook`}><img className="social-icon" src="https://img.icons8.com/color/96/000000/twitter.png" alt="twitter" /></a>
    <a href={`${BACKEND_PATH}/oauth/google`}>
      <img className="social-icon" src="https://img.icons8.com/color/96/000000/google-logo.png" alt="google" />
    </a>
    <a href={`${BACKEND_PATH}/oauth/facebook`}><img className="social-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMzg1YzhlIj48cGF0aCBkPSJNMTEwLjA4LDM3Ljg0aDE3LjJjMS44OTg4OCwwIDMuNDQsLTEuNTQxMTIgMy40NCwtMy40NHYtMjMuMTc1MjhjMCwtMS44MDI1NiAtMS4zODYzMiwtMy4zMDI0IC0zLjE4MiwtMy40Mjk2OGMtNS40NzMwNCwtMC4zODg3MiAtMTYuMTY0NTYsLTAuOTE1MDQgLTIzLjg1Mjk2LC0wLjkxNTA0Yy0yMS4xMjUwNCwwIC0zNC44ODUwNCwxMi42NTkyIC0zNC44ODUwNCwzNS42NjU5MnYyMi44MTQwOGgtMjQuMDhjLTEuODk4ODgsMCAtMy40NCwxLjU0MTEyIC0zLjQ0LDMuNDR2MjQuMDhjMCwxLjg5ODg4IDEuNTQxMTIsMy40NCAzLjQ0LDMuNDRoMjQuMDh2NjUuMzZjMCwxLjg5ODg4IDEuNTQxMTIsMy40NCAzLjQ0LDMuNDRoMjQuMDhjMS44OTg4OCwwIDMuNDQsLTEuNTQxMTIgMy40NCwtMy40NHYtNjUuMzZoMjQuODQzNjhjMS43NTQ0LDAgMy4yMjY3MiwtMS4zMTc1MiAzLjQxOTM2LC0zLjA2MTZsMi42NzYzMiwtMjQuMDhjMC4yMjcwNCwtMi4wMzY0OCAtMS4zNjkxMiwtMy44MTg0IC0zLjQxOTM2LC0zLjgxODRoLTI3LjUydi0xNy4yYzAsLTUuNzAwMDggNC42MTk5MiwtMTAuMzIgMTAuMzIsLTEwLjMyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" alt="facebook" /></a>
  </div>
);

export default SocialLogin;

import { redirect } from "react-router-dom";

export default function authentication() {
  if (!localStorage.getItem('access_token')) {
    return redirect('/login');
  }
}
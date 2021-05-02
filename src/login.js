import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styleArgument = {};


const Login=()=>{
  return (
    <div>
      <form>  
      <br></br>
      <TextField
          required
          id="outlined-email"
          label="Email Address"
          defaultValue="B0829000@cgu.edu.tw"
          variant="outlined"
          color="primary"
          style = {styleArgument}
        />
        <p></p>
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <p></p>
        <Button variant = "outlined" color ="primary" type="submit">sign in</Button>
      </form>
    </div>
  )
}
export default Login;


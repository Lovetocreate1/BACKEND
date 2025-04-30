import erxpress from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app=express()

app.use(cos({
  origin:process.env.CROS_ORIGIN
  Credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:
  "16kb"}))
  app.use(express.static("public"))
  app.use(cookieparser())
export{app}
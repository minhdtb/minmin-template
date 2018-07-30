import {Controller, Get, Result} from "minmin";

@Controller("api")
export class HelloController {

    @Get("test")
    private test() {
        return new Result("content", {
            message: "Hello world!!"
        })
    }
}
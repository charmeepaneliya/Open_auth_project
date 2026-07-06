class HttpError extends Error{
    constructor(message,stastusCode){
        super(message);
        this.stastusCode = stastusCode;
    }
}
export default HttpError;
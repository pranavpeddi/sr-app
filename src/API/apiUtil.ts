import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export class ApiUtil{

    public fetch(url: string, screenName?: string): Promise<any> {
        let getProm =  axios.get(url).then((value: AxiosResponse) => {
            return value.data;
        });
        if(screenName)
            toast.promise(getProm, {
            pending: `Fetching ${screenName} Details`,
            success: "Here they are 👌",
                error: "Promise rejected 🤯",
            })
        
        return getProm;
    }

    public async post(url: string, requestBody: string, screenName: string, isEdit: boolean) {
        let postPromise = axios.post(url, requestBody);
        toast.promise(postPromise, {
            pending:
                isEdit ? `Updating ${screenName} details` : `Saving New ${screenName}`,
            success: "Successfully inserted👌",
            error: "Promise rejected 🤯",
        });
    }
}
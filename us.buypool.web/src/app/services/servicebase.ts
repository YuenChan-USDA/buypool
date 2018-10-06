import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
export class Servicebase {
    protected apiServerRoot: string 
    protected apiRoot: string 
    protected appRoot: string 

    constructor(resource: string, protected http: HttpClient) {

        this.apiServerRoot = environment.apiServerRoot;
        this.apiRoot = this.apiServerRoot + "/api/" + resource + "/";
        this.appRoot=environment.appRoot;
    }

    getResourceList()
    {
        return this.http.get(this.apiRoot, { withCredentials: true });
    }
    getResourceById(id: string) {
        return this.http.get(this.apiRoot + id, { withCredentials: true });
    }

    saveResource(resource) {
        return this.http.post(this.apiRoot, resource, { withCredentials: true })
    }    
}

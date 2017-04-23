import { MockitJs } from "../main";

export class FormDataInterceptor extends MockitJs.NativeFormData {
    private json: { [name: string]: string | number | boolean };

    public append(name: string, value: string | number | boolean, blobName?: string) {
        this.json[name] = value;
        super.append(name, value, blobName);
    }

    public toString(): string {
        return JSON.stringify(this.json);
    }
}
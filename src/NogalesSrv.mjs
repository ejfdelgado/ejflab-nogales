import { commonHeaders, handleErrorsDecorator } from "@ejfdelgado/ejflab-back/srv/Network.mjs";
import * as multer from 'multer';
import { AssessmentService } from "./AssessmentSrv.mjs";

const upload = multer.default()

export class NogalesSrv {
    static configure(app) {
        app.get('/srv/nogales/test', [commonHeaders, handleErrorsDecorator(AssessmentService.test)]);

    }
}
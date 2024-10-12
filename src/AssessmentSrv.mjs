export class AssessmentService {
    static async test(req, res, next) {
        const response = {
            now: new Date().getTime(),
        };
        res.status(200).send(response);
    }
}
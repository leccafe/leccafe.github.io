import "reflect-metadata";
import "zone.js";
import {bootstrap, Component, CORE_DIRECTIVES} from "angular2/angular2";


@Component({
    selector: `my-app`,
    templateUrl: './components/app/app.html',
})
class MyApp {
}

bootstrap(MyApp);


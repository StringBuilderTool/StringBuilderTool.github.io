import clippy, {Agent} from "clippyts";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClippyService {

  private _agent: Agent | undefined;

  constructor() {
    clippy.load({
      name: 'Clippy',
      failCb: (err) => console.log(err),
      successCb: (agent) => {
        agent.show(false);
        agent.moveTo(1500, 200, 0);
        this._agent = agent;
      }
    });
  }

  speak(text: string) {
    this._agent?.speak(text, false);
  }

  play(animation: string) {
    this._agent?.play(animation);
  }
}

import {Component, OnInit, VERSION} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Report Viewer';
    angularVersion: string;

    viewerContainerStyle = {
        position: 'absolute',
        top: '37px',
        bottom: '5px',
        left: '5px',
        right: '5px',
        overflow: 'hidden',
        ['font-family']: 'ms sans serif'
    };

    viewerContainerStyle2 = {
        position: 'relative',
        width: '100%',
        height: '100%'
    };

    ngOnInit() {
        this.angularVersion = VERSION.full;
    }

    ready() {
        console.log('ready');
    }

    viewerToolTipOpening(e: any, args: any) {
        console.log('viewerToolTipOpening ' + args.toolTip.text);
    }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {customer, mail, reports, settings, superAdminRoutes} from '@/super-admin/router-path-super-admin';
import {AppService} from '@/shared/services/app.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss']
})
export class SuperAdminComponent implements OnInit {
  whichMenuToShow: any = [];
  currentRouter = '';
  adminRoutes = superAdminRoutes;

  constructor(private router: Router, private _appService: AppService) {
    $(document).ready(function () {
      /* $('#sidebarCollapse').on('click', function () {
         $('#sidebar').toggleClass('active');
       });*/

      $('#menu-toggle').click(function (e) {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
      });

    });
  }

  ngOnInit() {
    this.displayMenu();
  }

  displayMenu() {
    this.currentRouter = this.router.url.split('/').filter(Boolean)[1];
    this.whichMenuToShow = this.mailBoxMenu()[this.currentRouter];
  }

  logout() {
    this._appService.logout();
  }

  mailBoxMenu() {
    const mailPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.mail}`;
    const reportsPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.report}`;
    const settingsPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.settings}`;
    const customerPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.customer}`;

    return {
      [this.adminRoutes.mail]: [
        {
          text: 'Request',
          link: `${mailPath}/${mail.request}`,
          iconClass: 'fas fa-home',
          status: true,
        },
        {
          text: 'Upload New Mail',
          link: `${mailPath}/${mail.upload_new_mail}`,
          iconClass: 'fas fa-file-upload',
          status: true
        },
        {
          text: 'Assign Mail',
          link: `${mailPath}/${mail.assign_mail}`,
          iconClass: 'fas fa-user-check',
          status: true
        },
        {
          text: 'Returned',
          link: `${mailPath}/${mail.returned}`,
          iconClass: 'fas fa-undo',
          status: true
        },
        {
          text: 'Mail Management',
          link: `${mailPath}/${mail.mail_management}`,
          iconClass: 'fas fa-users',
          status: true
        },
        {
          text: 'Outgoing Mail',
          // link: `${mailPath}/${mail.mail_management}`,
          linkName: '5', // add index No count index 0
          iconClass: 'fas fa-home',
          status: true,
          action: 'dropdown',
          submenu: [
            {
              text: 'Pending',
              link: `${mailPath}/${mail.pending}`,
              iconClass: 'fas fa-users',
              status: true
            }
          ]
        },
      ],
      [this.adminRoutes.customer]: [
        {
          text: 'Inbox',
          link: `${customerPath}/${customer.inbox}`,
          iconClass: 'fas fa-inbox',
          status: true
        },
        {
          text: 'Archived Scans',
          link: `${customerPath}/${customer.archived_scans}`,
          iconClass: 'fas fa-archive',
          status: true
        }
      ],
      [this.adminRoutes.report]: [
        {
          text: 'Operations',
          link: `${reportsPath}/${reports.operations}`,
          iconClass: '',
          status: true
        }, {
          text: 'Statements',
          link: `${reportsPath}/${reports.statements}`,
          iconClass: '',
          status: true
        }, {
          text: 'Quarterly Report',
          link: `${reportsPath}/${reports.quarterlyReport}`,
          iconClass: '',
          status: true
        }, {
          text: 'Closed Account',
          link: `${reportsPath}/${reports.closedAccount}`,
          iconClass: '',
          status: true
        },
      ],
      [this.adminRoutes.settings]: [
        {
          text: 'Setting Test',
          link: `${settingsPath}/${settings.test}`,
          iconClass: '',
          status: true
        }
      ]
    };
  }

  gotoRouter(menuName: string) {
    this.router.navigate([`/superAdmin/${menuName}`]).then(() => {
      this.displayMenu();
    });
  }

  getMenuItem(index: any) {
    return this.mailBoxMenu()[this.currentRouter][index];
  }
}

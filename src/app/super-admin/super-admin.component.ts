import {ChangeDetectorRef, Component, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {admin, customer, mail, op_customer, reports, settings, superAdminRoutes} from '@/super-admin/router-path-super-admin';
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
  userInfo;
  remoteLoginInfo;
  _isRemoteLoggedIn = false;

  constructor(private router: Router, private _appService: AppService,
    private changeDetector: ChangeDetectorRef) {
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
    this.userInfo = JSON.parse(localStorage.getItem('user-info')) || {};
    this.remoteLoginInfo =  (localStorage.getItem('customer-remote-auth')) || {};
    console.log(this.remoteLoginInfo);
    this.changeDetector.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck(){
    this._isRemoteLoggedIn = localStorage.getItem('customer-remote-auth') ? true : false;
  }

  displayMenu() {
    this.currentRouter = this.router.url.split('/').filter(Boolean)[1];
    this.whichMenuToShow = this.mailBoxMenu()[this.currentRouter];

  }

  logout() {
    this._appService.logout();
  }

  mailBoxMenu() {
    const adminPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.admin}`;
    const mailPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.mail}`;
    const reportsPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.report}`;
    const settingsPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.settings}`;
    const customerPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.customer}`;
    const opCustomersPath = `/${superAdminRoutes.superAdmin}/${superAdminRoutes.op_customer}`;

    return {
      [this.adminRoutes.admin]: [
        {
          text: 'Packages',
          link: `${adminPath}/${admin.packages}`,
          iconClass: 'fas fa-home',
          status: true,
        },
      ],      
      [this.adminRoutes.mail]: [
        {
          text: 'Request',
          link: `${mailPath}/${mail.request}`,
          iconClass: 'fas fa-home',
          status: false,
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
      [this.adminRoutes.op_customer]: [
        {
          text: 'Customers',
          link: `${opCustomersPath}/${op_customer.customer_list}`,
          iconClass: 'fas fa-home',
          status: true,
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
          text: 'Folders',
          link: `${customerPath}/${customer.archived_scans}`,
          iconClass: 'fas fa-folder',
          status: true
        },
        {
          text: 'Archived Scans',
          link: `${customerPath}/${customer.archived_scans}`,
          iconClass: 'fas fa-archive',
          status: true
        },
        {
          text: 'Outgoing Mail',
          link: `${customerPath}/${customer.outgoing_mail}`,
          iconClass: 'fas fa-envelope-open-text',
          status: true
        },
        {
          text: 'View All',
          link: `${customerPath}/${customer.view_inbox}`,
          iconClass: 'fas fa-mail-bulk',
          status: true
        },
        {
          text: 'Filters',
          link: `${customerPath}/${customer.archived_scans}`,
          iconClass: 'fas fa-filter',
          status: true
        },
        {
          text: 'Trash',
          link: `${customerPath}/${customer.archived_scans}`,
          iconClass: 'fas fa-trash',
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
          text: 'My Account ',
          link: `${settingsPath}/${settings.my_account}`,
          iconClass: 'fas fa-file',
          status: true
        },
        {
          text: 'Operators',
          link: `${settingsPath}/${settings.operators}`,
          iconClass: 'fas fa-users-cog',
          status: true
        },
        {
          text: 'Mailbox Setting',
          link: `${settingsPath}/${settings.mailbox_setting}`,
          iconClass: 'fas fa-inbox',
          status: true
        },
        {
          text: 'Advanced Setting',
          link: `${settingsPath}/${settings.advanced_setting}`,
          iconClass: 'fas fa-cogs',
          status: true
        },
        {
          text: 'Video Tutorials',
          link: `${settingsPath}/${settings.vedio_tutorials}`,
          iconClass: 'fas fa-video',
          status: true
        },
        {
          text: 'Marketing Files',
          link: `${settingsPath}/${settings.marketing_files}`,
          iconClass: 'fas fa-file',
          status: true
        }
      ]
    };
  }

  gotoRouter(menuName: string) {
    console.log(`/superAdmin/${menuName}`)
    this.router.navigate([`/superAdmin/${menuName}`]).then(() => {
      this.displayMenu();
    });
  }

  getMenuItem(index: any) {
    return this.mailBoxMenu()[this.currentRouter][index];
  }

  remoteLogout(){
    localStorage.removeItem('customer-remote-auth');
    this.router.navigate(['superAdmin'])
  }
}

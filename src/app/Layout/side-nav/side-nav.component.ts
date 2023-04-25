import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() isExpanded: boolean = true;
  selected: any = {};
  menuList: any;
  constructor() {
    this.menuList = [
      { name: "Dashboard", ImageSrc: "../assets/images/house-img.png", iconClass: "", route: "" },
      {
        name: "Settings", ImageSrc: "", iconClass:"fa fa-cogs mx-2", route: "", subMenu: [
          { label: "Roles", route: "/Form/create" },
          { label: "Page Access", route: "Form/create" },
          { label: "Coded Value", route: "/CodedValue"}
        ]
      },
      {
        name: "Form Manager", ImageSrc: "../assets/images/house-img.png", iconClass: "", route: "", subMenu: [
          { label: "Create Form", route: "/Form/create" },
          { label: "Manage Form", route: "/Form/manage" }
        ]
      },
      {
        name: "Rule Engine", ImageSrc: "../assets/images/rule-img.png", iconClass: "", route: "", subMenu: [
          { label: "RuleFlow", route: "/RuleFlow" },
          { label: "Input Rule Parameter", route: "/InputRuleParameter" }
        ]
      },
      {
        name: "Communication", ImageSrc: "../assets/images/communication-icon.png", iconClass: "", route: "", subMenu: [
          { label: "SMTP", route: "/SMTP" },
          { label: "Configure", route: "/Communication" }
        ]
      },
      {
        name: "Batch Process", ImageSrc: "../../../assets/images/batch-process-icon.svg", iconClass: "", route: "BatchProcess", subMenu: [
          { label: "Create Job", route: "/CreateJOb" },
          { label: " Create trigger", route: "/CreateTrigger" }
        ]
      }
      ,
      {
        name: " Work FLow", ImageSrc: "../../../assets/images/batch-process-icon.svg", iconClass: "", route: "", subMenu: [
          { label: "Razor Engine", route: "/RazorEngine" },
          { label: "Angular Engine", route: "/AngularEngine" },
          { label: "Case For Review", route: "/CaseReview" },
          { label: "Task", route: "/Task" },
          { label: "TaskDetail", route: "/TaskDetail" }
        ]
      }
    ]
  }
  select(type: any, item: any, $event: any) {
    this.selected[type] = (this.selected[type] === item ? null : item);
  //  console.log('Item: ', item);
    $event ? $event.stopPropagation() : null;
  }
  isActive(type: any, item: any) {
    return this.selected[type] === item;
  }
  ngOnInit() {
  }
}

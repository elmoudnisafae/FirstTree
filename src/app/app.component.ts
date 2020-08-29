import { Component } from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import{BehaviorSubject,Observable,of as observableOf} from "rxjs";

export class FileNode{
  children: FileNode[];
  filename:string;
  type:any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'docFreterium-Front';
  nestedTreeControl:NestedTreeControl<FileNode>;
  nestedDataSource:MatTreeNestedDataSource<FileNode>;
  dataChange:BehaviorSubject<FileNode[]>=new BehaviorSubject<FileNode[]>([]);

  constructor() {
    this.nestedTreeControl=new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource=new MatTreeNestedDataSource();

    this.dataChange.subscribe(data=>this.nestedDataSource.data=data);
this.dataChange.next([
  {
    filename:"folder1",
    type:"",
    children:[
      {
        filename:"test1",
        type:"exe",
        children:[],
      },
      {
        filename:"test2",
        type:"exe",
        children:[],
      }
    ],
  },
  {
    filename: "folder2",
    type:"",
    children:[
      {
        filename:"test1",
        type:"",
        children:[
          {
            filename:"test12",
            type:"exe",
            children:[],
          },
          {
            filename:"test22",
            type:"exe",
            children:[],
          }
        ],
      }
    ],
  },
  {
    filename: "folder3",
    type:"",
    children:[
      {
        filename:"test1",
        type:"",
        children:[
          {
            filename:"test12",
            type:"exe",
            children:[],
          },
          {
            filename:"test22",
            type:"exe",
            children:[],
          }
        ],
      }
    ],
  },
  {
    filename: "folder4",
    type:"",
    children:[
      {
        filename:"test1",
        type:"",
        children:[
          {
            filename:"test12",
            type:"exe",
            children:[],
          },
          {
            filename:"test22",
            type:"exe",
            children:[],
          }
        ],
      }
    ],
  },
  {
    filename: "folder5",
    type:"",
    children:[
      {
        filename:"test1",
        type:"",
        children:[
          {
            filename:"test12",
            type:"exe",
            children:[],
          },
          {
            filename:"test22",
            type:"exe",
            children:[],
          }
        ],
      }
    ],
  },
  {
    filename: "folder6",
    type:"",
    children:[
      {
        filename:"test1",
        type:"",
        children:[
          {
            filename:"test12",
            type:"exe",
            children:[],
          },
          {
            filename:"test22",
            type:"exe",
            children:[],
          }
        ],
      }
    ],
  },

]);
  }
  private _getChildren=(node:FileNode)=>{return observableOf(node.children);};
  hasNestedChild=(_:number,nodeData:FileNode)=>{return!(nodeData.type);};


}


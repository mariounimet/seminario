export class ScFormatDate{constructor(){this.locale=void 0,this.date=new Date,this.weekday=void 0,this.era=void 0,this.year=void 0,this.month=void 0,this.day=void 0,this.hour=void 0,this.minute=void 0,this.second=void 0,this.timeZoneName=void 0,this.timeZone=void 0,this.hourFormat="auto",this.type="date"}render(){const e="timestamp"===this.type?1e3*parseInt(this.date.toString()):this.date,t=new Date(e),r="auto"===this.hourFormat?void 0:"12"===this.hourFormat;if(!isNaN(t.getMilliseconds()))return new Intl.DateTimeFormat(this.locale,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:r}).format(t)}static get is(){return"sc-format-date"}static get properties(){return{locale:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The locale to use when formatting the date/time."},attribute:"locale",reflect:!1},date:{type:"any",mutable:!1,complexType:{original:"Date | string | number",resolved:"Date | number | string",references:{Date:{location:"global"}}},required:!1,optional:!1,docs:{tags:[],text:"The date/time to format. If not set, the current date and time will be used."},attribute:"date",reflect:!1,defaultValue:"new Date()"},weekday:{type:"string",mutable:!1,complexType:{original:"'narrow' | 'short' | 'long'",resolved:'"long" | "narrow" | "short"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the weekday."},attribute:"weekday",reflect:!1},era:{type:"string",mutable:!1,complexType:{original:"'narrow' | 'short' | 'long'",resolved:'"long" | "narrow" | "short"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the era."},attribute:"era",reflect:!1},year:{type:"string",mutable:!1,complexType:{original:"'numeric' | '2-digit'",resolved:'"2-digit" | "numeric"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the year."},attribute:"year",reflect:!1},month:{type:"string",mutable:!1,complexType:{original:"'numeric' | '2-digit' | 'narrow' | 'short' | 'long'",resolved:'"2-digit" | "long" | "narrow" | "numeric" | "short"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the month."},attribute:"month",reflect:!1},day:{type:"string",mutable:!1,complexType:{original:"'numeric' | '2-digit'",resolved:'"2-digit" | "numeric"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the day."},attribute:"day",reflect:!1},hour:{type:"string",mutable:!1,complexType:{original:"'numeric' | '2-digit'",resolved:'"2-digit" | "numeric"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the hour."},attribute:"hour",reflect:!1},minute:{type:"string",mutable:!1,complexType:{original:"'numeric' | '2-digit'",resolved:'"2-digit" | "numeric"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the minute."},attribute:"minute",reflect:!1},second:{type:"string",mutable:!1,complexType:{original:"'numeric' | '2-digit'",resolved:'"2-digit" | "numeric"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the second."},attribute:"second",reflect:!1},timeZoneName:{type:"string",mutable:!1,complexType:{original:"'short' | 'long'",resolved:'"long" | "short"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The format for displaying the time."},attribute:"time-zone-name",reflect:!1},timeZone:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The time zone to express the time in."},attribute:"time-zone",reflect:!1},hourFormat:{type:"string",mutable:!1,complexType:{original:"'auto' | '12' | '24'",resolved:'"12" | "24" | "auto"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"When set, 24 hour time will always be used."},attribute:"hour-format",reflect:!1,defaultValue:"'auto'"},type:{type:"string",mutable:!1,complexType:{original:"'timestamp' | 'date'",resolved:'"date" | "timestamp"',references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"type",reflect:!1,defaultValue:"'date'"}}}}
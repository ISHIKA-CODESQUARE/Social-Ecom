
import FormField = require('dw/web/FormField')
import FormGroup = require('dw/web/FormGroup');
import FormAction = require('dw/web/FormAction');
// autogeneratedfile

/** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#2)*/
declare class FormFriendList extends FormGroup {
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#4) */
	Id : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#5) */
	firstName : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#6) */
	lastName : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#7) */
	address1 : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#8) */
	address2 : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#9) */
	date : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#10) */
	country : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#21) */
	states : FormStates
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#23) */
	city : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#24) */
	zip : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#26) */
	email : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#28) */
	phone : FormField<string>
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#31) */
	apply : FormAction
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#32) */
	remove : FormAction
}

declare global {
interface SFCCForms {
	friendList: FormFriendList
}
}


/****** SRFA *******/

interface SfraAction {
    description: string | null;
    label: string | null;
    submitted: boolean | null;
    triggered: boolean | null;
    formType: string;
}

interface SfraFiledOptions {
	checked: boolean,
	htmlValue: string,
	label: string,
	id: string,
	selected: boolean,
	value: string
}

interface SfraFieldBoolean {
	checked: boolean;
	selected: boolean;
}

interface SfraFieldString {
	maxLength: number;
	minLength: number;
	regEx: string
}

interface SfraFieldInteger {
	maxValue: number;
	minValue: number;
}

interface SfraField<T> {
	valid: boolean;
	error: string | null
	readonly attributes: string;
	value: T;
	options: SfraFiledOptions[];
	selectedOption: string;
	formType: string;

	htmlValue: string,
	mandatory: boolean,
	dynamicHtmlName: string
	htmlName: string
}

interface SfraFormBase<T> {
	clear() : void;
	copyFrom(src: object): void;
	toObject(): any;
	valid: boolean;
	base: T
	htmlName: string,
	dynamicHtmlName: string,
	error: string | null,
	attributes: string,
	formType: 'formGroup'
}
/** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#2)*/
interface SfraFormFriendList extends SfraFormBase<FormFriendList> {
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#4) */
	Id : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#5) */
	firstName : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#6) */
	lastName : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#7) */
	address1 : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#8) */
	address2 : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#9) */
	date : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#10) */
	country : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#21) */
	states : SfraFormStates
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#23) */
	city : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#24) */
	zip : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#26) */
	email : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#28) */
	phone : SfraField<string> & SfraFieldString
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#31) */
	apply : SfraAction
	 /** @source [definition](file:c:\Users\admin\Desktop\friendlist_changes\friendList\FriendListModule\cartridges\app_custom_friendlistmodule\cartridge\forms\default\friendList.xml#32) */
	remove : SfraAction
}

declare global {
interface SFRAServerForms {
	getForm(name: 'friendList'): SfraFormFriendList
}
}

declare global {
interface SRFAForms {
	friendList: SfraFormFriendList
}
}
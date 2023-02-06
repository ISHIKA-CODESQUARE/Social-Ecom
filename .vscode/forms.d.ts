
import FormField = require('dw/web/FormField')
import FormGroup = require('dw/web/FormGroup');
import FormAction = require('dw/web/FormAction');
// autogeneratedfile

	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#2)*/
declare class FormProfileCustomer extends FormGroup {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#4) */
	firstname : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#13) */
	lastname : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#22) */
	email : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#35) */
	emailconfirm : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#48) */
	phone : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#57) */
	addtoemaillist : FormField<boolean>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#62) */
	verifyRecaptcha : FormField<boolean>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#67) */
	recaptcha : FormField<string>
}
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#2)*/
declare class FormProfileLogin extends FormGroup {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#76) */
	password : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#87) */
	passwordconfirm : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#98) */
	currentpassword : FormField<string>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#108) */
	newpasswords : FormNewPasswords
}
/** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#2)*/
declare class FormProfile extends FormGroup {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#3) */
	customer : FormProfileCustomer
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#75) */
	login : FormProfileLogin
}
/** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#2)*/
declare class FormGeocoding extends FormGroup {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#3) */
	number : FormField<number>
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#4) */
	save : FormAction
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#5) */
	remove : FormAction
}

declare global {
interface SFCCForms {
	profile: FormProfile
	geocoding: FormGeocoding
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
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#2)*/
interface SfraFormProfileCustomer {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#4) */
	firstname : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#13) */
	lastname : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#22) */
	email : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#35) */
	emailconfirm : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#48) */
	phone : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#57) */
	addtoemaillist : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#62) */
	verifyRecaptcha : SfraField<boolean> & SfraFieldBoolean
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#67) */
	recaptcha : SfraField<string> & SfraFieldString
}
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#2)*/
interface SfraFormProfileLogin {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#76) */
	password : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#87) */
	passwordconfirm : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#98) */
	currentpassword : SfraField<string> & SfraFieldString
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#108) */
	newpasswords : SfraFormNewPasswords
}
/** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#2)*/
interface SfraFormProfile extends SfraFormBase<FormProfile> {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#3) */
	customer : SfraFormProfileCustomer
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\profile.xml#75) */
	login : SfraFormProfileLogin
}
/** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#2)*/
interface SfraFormGeocoding extends SfraFormBase<FormGeocoding> {
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#3) */
	number : SfraField<number> & SfraFieldInteger
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#4) */
	save : SfraAction
	 /** @source [definition](file:d:\Mansi_Gupta\Internal Projects\store locator\custom\cartridges\UserRecaptchaTeam1\cartridge\forms\default\geocoding.xml#5) */
	remove : SfraAction
}

declare global {
interface SFRAServerForms {
	getForm(name: 'profile'): SfraFormProfile
	getForm(name: 'geocoding'): SfraFormGeocoding
}
}

declare global {
interface SRFAForms {
	profile: SfraFormProfile
	geocoding: SfraFormGeocoding
}
}
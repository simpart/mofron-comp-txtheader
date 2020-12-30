/**
 * @file  mofron-comp-txtheader/index.js
 * @brief text header component
 *        text in this component is positioned centrally in vertical in automatically. 
 * @license MIT
 */
const Header = require('mofron-comp-header');
const Text   = require('mofron-comp-text');
const Synhei = require('mofron-effect-synchei');
const cmputl = mofron.util.component;
const comutl = mofron.util.common;

module.exports = class extends Header {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                key-value: component option
     * @short text
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('TxtHeader');
            this.shortForm('text');
            
            if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.style({ 'align-items':'center' }, { private:true });
            this.child(this.text());
	    this.text().effect(new Synhei(this));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter text
     *
     * @param (mixed) string: text contents
     *                mofron-comp-text: update text component
     * @param (key-value) text config
     * @return (mofron-comp-text) text contents
     * @type parameter
     */
    text (txt, cnf) {
        try {
	    if (undefined !== cnf) {
                if (true === comutl.isinc(txt, "Text")) {
                    txt.config(cnf);
		} else {
                    this.text().config(cnf);
		}
	    }
            if ('string' === typeof txt) {
                this.text().text(txt);
                return;
            }
            return this.innerComp('text', txt, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * text position and size offset
     * 
     * @param (string (size)) left offset position
     * @param (string (size)) height offset position
     * 
     */
    txtpos (lft, hei) {
        try {
            this.text().style({ "margin-left" : lft });
	    let syn = this.text().effect({ name: "SyncHei" });
	    if (true === comutl.isinc(syn, "SyncHei") ) {
                syn.offset(hei);
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */

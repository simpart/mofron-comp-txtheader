/**
 * @file   mofron-comp-txtheader/index.js
 * @brief  text header component
 * @author simpart
 */
const mf     = require('mofron');
const Header = require('mofron-comp-header');
const Text   = require('mofron-comp-text');
const Invclr = require('mofron-effect-invclr');
const Synhei = require('mofron-effect-synchei');
/**
 * @class mofron.comp.TxtHeader
 * @brief text header contents component for mofron
 */
mf.comp.TxtHeader = class extends Header {
    constructor (po) {
        try {
            super();
            this.name('TxtHeader');
            this.prmMap('text');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.style({ 'align-items' : 'center' });
            this.addChild(this.text());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter text
     *
     * @param p1 (string) set text contents
     * @param p1 (Text) update text object
     * @param p1 (undefined) call as getter
     * @return text contents
     */
    text (txt, dct) {
        try {
            if ('string' === typeof txt) {
                this.text().execOption({ text : txt });
                return;
            } else if ( (true === mf.func.isComp(txt, 'Text')) && (true !== dct) ) {
                txt.execOption({
                    style  : [ {'margin-left' : '0.2rem'}, true],
                    effect : [ new Synhei(this, '-0.2rem') ]
                });
            }
            return this.innerComp('text', txt, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter invert flag
     * true flag changes text color when background color changed
     * 
     * @param flg (true) enable invert changing (default)
     * @param flg (false) disable invert changing
     * @return (boolean) invert flag
     */
    invert (flg) {
        try {
            let ret = this.effect('Invclr').suspend(
                (undefined !== flg)? !flg : flg
            );
            return (undefined !== ret) ? !ret : ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter synchronize height flag
     * true flag changes text size when header height changed
     * 
     * @param flg (true) enable invert changing (default)
     * @param flg (false) disable invert changing
     * @return (boolean) invert flag
     */
    synchei (flg) {
        try {
            let ret = this.effect('SyncHei').suspend(
                (undefined !== flg)?  !flg : flg
            );
            return (undefined !== ret) ? !ret : ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.TxtHeader;
/* end of file */

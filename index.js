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
     * @param txt (string) set text contents
     * @param txt (mf.comp.Text) update text object
     * @param txt (undefined) call as getter
     * @return text contents
     */
    text (txt) {
        try {
            if ('string' === typeof txt) {
                this.text().execOption({ text : txt });
                return;
            } else if (true === mf.func.isInclude(txt, 'Text')) {
                txt.execOption({
                    style  : [{ 'margin-left' : '0.2rem' }, true],
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
            if (undefined !== flg) {
                this.effect('Invclr').suspend(!flg);
            }
            return !(this.effect('Invclr').suspend());
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
            if (undefined !== flg) {
                this.effect('SyncHei').suspend(!flg);
            }
            return !(this.effect('SyncHei').suspend());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.TxtHeader;
/* end of file */

/**
 * @file   mofron-comp-txtheader/index.js
 * @brief  text header component
 * @author simpart
 */
const mf     = require('mofron');
const Header = require('mofron-comp-header');
const Text   = require('mofron-comp-text');
const Synhei = require('mofron-effect-synchei');

mf.comp.TxtHeader = class extends Header {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                object: component option
     * @pmap text
     * @type private
     */
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
     * @type private
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
     * @param (mixed) string: text contents
     *                mofron-comp-text: update text component
     * @param (string (size)) margin-left value
     * @return (mofron-comp-text) text contents
     * @type parameter
     */
    text (txt, lft) {
        try {
            if ('string' === typeof txt) {
                this.text().option({ text :txt });
                if (undefined !== lft) {
                    this.text().option({ style: {'margin-left' : lft} });
                }
                return;
            } else if (true === mf.func.isComp(txt, 'Text')) {
                txt.option({
                    style : [
                        { 'margin-left' : (undefined === lft) ? '0.2rem' : lft },
                        (undefined === lft) ? true : false
                    ],
                    effect: [
                        new Synhei({ targetComp: this, tag: this.name() + '-text' }),
                    ]
                });
            }
            return this.innerComp('text', txt, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter synchronize height flag
     * true flag changes text size when header height changed
     * 
     * @param (boolean) true: enable invert changing (default)
     *                  false: disable invert changing
     * @return (boolean) invert flag
     * @type parameter
     */
    synchei (flg) {
        try {
            let ret = this.text().effect(['SyncHei', this.name() + '-text']).suspend(
                ('boolean' === typeof flg) ? !flg : undefined
            );
            return (undefined !== ret) ? !ret: undefined;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.TxtHeader;
/* end of file */

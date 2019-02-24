/**
 * @file   mofron-comp-txtheader/index.js
 * @brief  text header component
 * @author simpart
 */
const mf     = require('mofron');
const Header = require('mofron-comp-header');
const Text   = require('mofron-comp-text');
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
                        new Synhei({ targetComp: this, offset: '-0.2rem', tag: this.name() + '-text' }),
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
     * @param flg (true) enable invert changing (default)
     * @param flg (false) disable invert changing
     * @return (boolean) invert flag
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

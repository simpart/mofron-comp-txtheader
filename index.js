/**
 * @file   mofron-comp-txtheader/index.js
 * @author simpart
 */
const mf     = require('mofron');
const Header = require('mofron-comp-header');
const Text   = require('mofron-comp-text');

/**
 * @class mofron.comp.TxtHeader
 * @brief text header contents component for mofron
 */
mf.comp.TxtHeader = class extends Header {
    /**
     * initialize component
     * 
     * @param po header text or option
     */
    constructor (po) {
        try {
            super();
            this.name('txtheader');
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
     * @param prm : (string) header text
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.target().style({
                'align-items' : 'center',
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_txthdr_txt) ? [] : this.m_txthdr_txt;
            }
            /* setter */
            if ('string' === typeof prm) {
                prm = new Text(prm);
            } else if (true !== mf.func.isInclude(prm, 'Text')) {
                throw new Error('invalid parameter');
            }
            /* set color */
            this.execInvert(prm);
            /* set height */
            this.execAutoResize(prm);
            
            this.addChild(prm);
            
            if (undefined === this.m_txthdr_txt) {
                this.m_txthdr_txt = new Array();
            }
            this.m_txthdr_txt.push(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * invert flag for text color
     * 
     * invert white/black text color according to background color if flag is true
     */
    invert (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_invert) ? true : this.m_invert;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_invert = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execInvert (prm) {
        try {
            if (undefined === prm) {
                let txt = this.text();
                if (true === mf.func.isInclude(txt, 'Text')) {
                    return this.execInvert(txt);
                } else if (true === Array.isArray(txt)) {
                    for (let tidx in txt) {
                        this.execInvert(txt[tidx]);
                    }
                }
                return;
            }
            
            if ( (true === this.invert())   &&
                 (null !== this.color()[1]) &&
                 (null === prm.color()) ) {
                let rgb = this.color()[1].rgba();
                let clr = (290 > (rgb[0]+rgb[1]+rgb[2])) ?
                          new mf.Color(255,255,255) : new mf.Color(0,0,0);
                prm.execOption({
                    mainColor : clr
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    autoResize (flg, ofs) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_autoresiz) ? [true, 0.2] : this.m_autoresiz;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            if ((undefined !== ofs) && ('number' !== typeof ofs)) {
                throw new Error('invalid parameter');
            }
            this.m_autoresiz = [flg, (undefined === ofs) ? 0.2 : ofs];
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execAutoResize (prm) {
        try {
            if (undefined === prm) {
                let txt = this.text();
                for (let tidx in txt) {
                    this.execAutoResize(txt[tidx]);
                }
                return false;
            }
            
            if (true === this.autoResize()[0]) {
                mofron.func.compSize(
                    prm,
                    (true === mf.func.isInclude(prm, 'Text')) ? 'font-size' : 'height',
                    mf.func.sizeDiff(this.height(), 0.2)
                );
                mofron.func.compSize(
                    prm, 
                    'margin-left',
                    this.autoResize()[1]
                );
                return true;
            }
            return false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (prm) {
        try {
            let ret = super.height(prm);
            if (undefined === ret) {
                this.execAutoResize();
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.TxtHeader;
/* end of file */

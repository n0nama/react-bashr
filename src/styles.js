const BaseStyles = {};

BaseStyles.ReactBash = {
    position:'relative',
    width:'100%',
    height:'100%',
    fontFamily: '\'Inconsolata\', monospace',
    fontSize: '13px',
    fontWeight: '400',
    height: '100%',
    textAlign: 'left',
};

BaseStyles.header = {
    padding: '5px 10px 0',
    borderTopLeftRadius:'5px',
    borderTopRightRadius:'5px'
};

const circle = {
    borderRadius: '50%',
    display: 'inline-block',
    height: '15px',
    marginRight: '5px',
    width: '15px',
};

BaseStyles.redCircle = Object.assign({}, circle, {
    backgroundColor: '#bf616a',
});

BaseStyles.yellowCircle = Object.assign({}, circle, {
    backgroundColor: '#ebcb8b',
});

BaseStyles.greenCircle = Object.assign({}, circle, {
    backgroundColor: '#a3be8c',
});

BaseStyles.body = {
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    overflow: 'auto',
    padding: '10px',
};

BaseStyles.bodyPanel = Object.assign({}, BaseStyles.body, { top: '23px', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px' });

BaseStyles.form = {
    display: 'flex',
};

BaseStyles.input = {
    background: 'none',
    border: 'none',
    color: 'inherit',
    flexGrow: '1',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    outline: 'none !important',
    padding: 0,
};

BaseStyles.prefix = {
    marginRight: '5px',
};

export default {
    light: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: '#fff',
            color: '#5D5D5D',
        }),
        bodyPanel: Object.assign({}, BaseStyles.bodyPanel, {
            backgroundColor: '#fff',
            color: '#5D5D5D',
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: '#eee',
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#bd081c',
        }),
    }),
    dark: Object.assign({}, BaseStyles, {
        body: Object.assign({}, BaseStyles.body, {
            backgroundColor: '#000',
            color: '#d0d0d0',
        }),
        bodyPanel: Object.assign({}, BaseStyles.bodyPanel, {
            backgroundColor: '#000',
            color: '#d0d0d0',
        }),
        header: Object.assign({}, BaseStyles.header, {
            backgroundColor: '#dcdbdb',
        }),
        prefix: Object.assign({}, BaseStyles.prefix, {
            color: '#5b65fb',
        }),
    }),
};

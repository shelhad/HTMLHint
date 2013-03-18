/**
 * Copyright (c) 2013, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'spec-char-escape',
    description: 'Special characters must be escaped.',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('text', function(event){
            var raw = event.raw,
                reSpecChar = /[<>]/g,
                match;
            while((match = reSpecChar.exec(raw))){
                reporter.error('Special characters must be escaped : [ '+match[0]+' ].', event.line, event.col + match.index, self, event.raw);
            }
        });
    }
});
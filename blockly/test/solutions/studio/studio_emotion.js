var TestResults = require('../../../src/constants.js').TestResults;
var Emotions = require('../../../src/studio/constants.js').Emotions;
var _ = require('../../../build/js/lodash');

/**
 * Runs the given function at the provided tick count
 */
function runOnTick(tick, fn) {
  Studio.onTick = _.wrap(Studio.onTick, function (studioOnTick) {
    if (Studio.tickCount === tick) {
      fn();
    }
    studioOnTick();
  });
}


var levelDef = {
  map: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0,16, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0,0, 0, 0],
    [0, 0, 0, 0, 0, 0, 16, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  freePlay: true,
  isK1: false
};

module.exports = {
  app: "studio",
  skinId: "studio",
  levelDefinition: levelDef,
  tests: [
    {
      description: "Validate emotions: happy",
      // On start have top left sprite go up and left.  Have bottom right go
      // left and down. All edges should be hit.  On each edge hit, score a point
      xml: '<xml>' +
          '<block type="when_run" deletable="false"><next>' +
            '<block type="studio_setSprite">' +
              '<title name="SPRITE">0</title>' +
              '<title name="VALUE">"witch"</title>' +
            '<next><block type="studio_setSpriteEmotion">' +
              '<title name="SPRITE">0</title>' +
              '<title name="VALUE">1</title>' +
          '</block></next></block></next></block>' +
        '</xml>',
      runBeforeClick: function (assert) {
        var assertSpriteFrame = function (frame) {
          var x = document.getElementById('sprite0').getAttribute('x');
          var actualFrame = 0.5 - x / 100;
          assert(actualFrame === frame, 'Expected: ' + frame + '  Actual: ' + actualFrame);
        };

        runOnTick(6, function () {
          assert(Studio.sprite[0].emotion === Emotions.HAPPY);
          // eye blink
          assertSpriteFrame(1);
        });

        runOnTick(25, function () {
          assert(Studio.sprite[0].emotion === Emotions.HAPPY);
          // happy frame
          assertSpriteFrame(9);
        });

        // add a completion on timeout since this is a freeplay level
        runOnTick(50, function () {
          Studio.onPuzzleComplete();
        });

      },
      expected: {
        result: true,
        testResult: TestResults.FREE_PLAY
      },
    },
    {
      description: "Validate emotions: angry",
      // On start have top left sprite go up and left.  Have bottom right go
      // left and down. All edges should be hit.  On each edge hit, score a point
      xml: '<xml>' +
          '<block type="when_run" deletable="false"><next>' +
            '<block type="studio_setSprite">' +
              '<title name="SPRITE">0</title>' +
              '<title name="VALUE">"witch"</title>' +
            '<next><block type="studio_setSpriteEmotion">' +
              '<title name="SPRITE">0</title>' +
              '<title name="VALUE">2</title>' +
          '</block></next></block></next></block>' +
        '</xml>',
      runBeforeClick: function (assert) {
        var assertSpriteFrame = function (frame) {
          var x = document.getElementById('sprite0').getAttribute('x');
          var actualFrame = 0.5 - x / 100;
          assert(actualFrame === frame, 'Expected: ' + frame + '  Actual: ' + actualFrame);
        };

        runOnTick(6, function () {
          assert(Studio.sprite[0].emotion === Emotions.ANGRY);
          // eye blink
          assertSpriteFrame(1);
        });

        runOnTick(25, function () {
          assert(Studio.sprite[0].emotion === Emotions.ANGRY);
          // happy frame
          assertSpriteFrame(10);
        });

        // add a completion on timeout since this is a freeplay level
        runOnTick(50, function () {
          Studio.onPuzzleComplete();
        });

      },
      expected: {
        result: true,
        testResult: TestResults.FREE_PLAY
      },
    },
    {
      description: "Validate emotions: sad",
      // On start have top left sprite go up and left.  Have bottom right go
      // left and down. All edges should be hit.  On each edge hit, score a point
      xml: '<xml>' +
          '<block type="when_run" deletable="false"><next>' +
            '<block type="studio_setSprite">' +
              '<title name="SPRITE">0</title>' +
              '<title name="VALUE">"witch"</title>' +
            '<next><block type="studio_setSpriteEmotion">' +
              '<title name="SPRITE">0</title>' +
              '<title name="VALUE">3</title>' +
          '</block></next></block></next></block>' +
        '</xml>',
      runBeforeClick: function (assert) {
        var assertSpriteFrame = function (frame) {
          var x = document.getElementById('sprite0').getAttribute('x');
          var actualFrame = 0.5 - x / 100;
          assert(actualFrame === frame, 'Expected: ' + frame + '  Actual: ' + actualFrame);
        };

        runOnTick(6, function () {
          assert(Studio.sprite[0].emotion === Emotions.SAD);
          // eye blink
          assertSpriteFrame(1);
        });

        runOnTick(25, function () {
          assert(Studio.sprite[0].emotion === Emotions.SAD);
          // happy frame
          assertSpriteFrame(11);
        });

        // add a completion on timeout since this is a freeplay level
        runOnTick(50, function () {
          Studio.onPuzzleComplete();
        });

      },
      expected: {
        result: true,
        testResult: TestResults.FREE_PLAY
      },
    },
  ]
};
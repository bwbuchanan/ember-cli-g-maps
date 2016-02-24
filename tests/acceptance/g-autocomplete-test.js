import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | basic-usage/autocomplete');

test('visiting /basic-usage/autocomplete', function(assert) {
  stubGMapAutocomplete(this);
  visit('/basic-usage/autocomplete');

  andThen(function() {
    assert.equal(currentURL(), '/basic-usage/autocomplete', 'visit correct path');
    assert.ok(find('.g-autocomplete').length > 0, 'g-autocomplete component was rendered');
  });

  notifyGMapAutocomplete(this, 'basic-autocomplete', {lat: '123', long: '456'});

  andThen(() => {
    assert.equal($('.lat').text().trim(), '123', 'showing correct latitude');
    assert.equal($('.long').text().trim(), '456', 'showing correct longitude');
  });
});
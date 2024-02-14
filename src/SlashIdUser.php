<?php

namespace SlashId\Laravel;

use Illuminate\Contracts\Auth\Authenticatable;

final class SlashIdUser implements Authenticatable {

    public function __construct(
      public string $id,
      protected array $values,
    ) {}

    public function getAuthIdentifierName() {
      return 'id';
    }

    public function getAuthIdentifier() {
      return $this->id;
    }

    public function getAuthPassword() {
      return NULL;
    }

    public function getRememberToken() {
      return NULL;
    }

    public function setRememberToken($value) {
      // Nothing.
    }

    public function getRememberTokenName() {
      return NULL;
    }

    public function getValues(): array {
        return $this->values;
    }

}

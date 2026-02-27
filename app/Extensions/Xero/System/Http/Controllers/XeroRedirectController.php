<?php

namespace App\Extensions\Xero\System\Http\Controllers;

use App\Http\Controllers\Controller;
use Dcblogdev\Xero\Facades\Xero;
use Throwable;

class XeroRedirectController extends Controller
{
    public function connectPost(): mixed
    {
        return redirect('xero/connect');
    }

    public function index(): mixed
    {
        try {
            if (! Xero::isConnected()) {
                return redirect('xero/connect');
            }

            return back()->with([
                'type'    => 'success',
                'message' => 'Xero connected successfully',
            ]);
        } catch (Throwable $e) {
        }
    }

    public function connect(): mixed
    {
        try {
            return Xero::connect();
        } catch (Throwable $e) {
        }
    }
}

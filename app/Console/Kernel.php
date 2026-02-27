<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Spatie\Health\Commands\RunHealthChecksCommand;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->command('app:crontab-check')->everyMinute()->withoutOverlapping();

        $customSchedulerPath = app_path('Console/CustomScheduler.php');

        if (file_exists($customSchedulerPath)) {
            require_once $customSchedulerPath;
            CustomScheduler::scheduleTasks($schedule);
        }

        $schedule->command('app:check-coingate-command')->everyFiveMinutes()->withoutOverlapping();

        $schedule->command('app:check-razorpay-command')->everyFiveMinutes()->withoutOverlapping();

        $schedule->command('subscription:check-end')->everyFiveMinutes()->withoutOverlapping();

        $schedule->command('app:check-yookassa-command')->daily()->withoutOverlapping();

        $schedule->command('app:clear-user-open-a-i')->daily()->withoutOverlapping();

        $schedule->command('app:clear-user-open-a-i-chat')->daily()->withoutOverlapping();

        $schedule->command('app:clear-job-table')->daily()->withoutOverlapping();

        $schedule->command('app:clear-user-activity')->daily()->withoutOverlapping();

        $schedule->command('app:clear-ai-realtime-image')->daily()->withoutOverlapping();

        $schedule->command('app:test-command')->everyMinute()->withoutOverlapping();
    }

    // $schedule->command(RunHealthChecksCommand::class)->everyFiveMinutes();
    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}

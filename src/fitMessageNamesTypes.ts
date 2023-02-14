export default interface FieldNamesI {
  file_id: file_id_fieldnames_i
  file_creator_: file_creator_fieldnames_i
  timestamp_correlation_: timestamp_correlation_fieldnames_i
  software_: software_fieldnames_i
  slave_device_: slave_device_fieldnames_i
  capabilities_: capabilities_fieldnames_i
  file_capabilities_: file_capabilities_fieldnames_i
  mesg_capabilities_: mesg_capabilities_fieldnames_i
  field_capabilities_: field_capabilities_fieldnames_i
  device_settings_: device_settings_fieldnames_i
  user_profile_: user_profile_fieldnames_i
  hrm_profile_: hrm_profile_fieldnames_i
  sdm_profile_: sdm_profile_fieldnames_i
  bike_profile_: bike_profile_fieldnames_i
  connectivity_: connectivity_fieldnames_i
  watchface_settings_: watchface_settings_fieldnames_i
  ohr_settings_: ohr_settings_fieldnames_i
  zones_target_: zones_target_fieldnames_i
  sport_: sport_fieldnames_i
  hr_zone_: hr_zone_fieldnames_i
  speed_zone_: speed_zone_fieldnames_i
  cadence_zone_: cadence_zone_fieldnames_i
  power_zone_: power_zone_fieldnames_i
  met_zone_: met_zone_fieldnames_i
  dive_settings_: dive_settings_fieldnames_i
  dive_alarm_: dive_alarm_fieldnames_i
  dive_gas_: dive_gas_fieldnames_i
  goal_: goal_fieldnames_i
  activity_: activity_fieldnames_i
  session_: session_fieldnames_i
  lap_: lap_fieldnames_i
  _length_: _length_fieldnames_i
  record_: record_fieldnames_i
  event_: event_fieldnames_i
  device_info_: device_info_fieldnames_i
  device_aux_battery_info_: device_aux_battery_info_fieldnames_i
  training_file_: training_file_fieldnames_i
  weather_conditions_: weather_conditions_fieldnames_i
  weather_alert_: weather_alert_fieldnames_i
  gps_metadata_: gps_metadata_fieldnames_i
  camera_event_: camera_event_fieldnames_i
  gyroscope_data_: gyroscope_data_fieldnames_i
  accelerometer_data_: accelerometer_data_fieldnames_i
  magnetometer_data_: magnetometer_data_fieldnames_i
  barometer_data_: barometer_data_fieldnames_i
  three_d_sensor_calibration_: three_d_sensor_calibration_fieldnames_i
  one_d_sensor_calibration_: one_d_sensor_calibration_fieldnames_i
  video_frame_: video_frame_fieldnames_i
  obdii_data_: obdii_data_fieldnames_i
  nmea_sentence_: nmea_sentence_fieldnames_i
  aviation_attitude_: aviation_attitude_fieldnames_i
  video_: video_fieldnames_i
  video_title_: video_title_fieldnames_i
  video_description_: video_description_fieldnames_i
  video_clip_: video_clip_fieldnames_i
  set_: set_fieldnames_i
  jump_: jump_fieldnames_i
  climb_pro_: climb_pro_fieldnames_i
  field_description_: field_description_fieldnames_i
  developer_data_id_: developer_data_id_fieldnames_i
  course_: course_fieldnames_i
  course_point_: course_point_fieldnames_i
  segment_id_: segment_id_fieldnames_i
  segment_leaderboard_entry_: segment_leaderboard_entry_fieldnames_i
  segment_point_: segment_point_fieldnames_i
  segment_lap_: segment_lap_fieldnames_i
  segment_file_: segment_file_fieldnames_i
  workout_: workout_fieldnames_i
  workout_session_: workout_session_fieldnames_i
  workout_step_: workout_step_fieldnames_i
  exercise_title_: exercise_title_fieldnames_i
  schedule_: schedule_fieldnames_i
  totals_: totals_fieldnames_i
  weight_scale_: weight_scale_fieldnames_i
  blood_pressure_: blood_pressure_fieldnames_i
  monitoring_info_: monitoring_info_fieldnames_i
  monitoring_: monitoring_fieldnames_i
  hr_: hr_fieldnames_i
  stress_level_: stress_level_fieldnames_i
  memo_glob_: memo_glob_fieldnames_i
  ant_channel_id_: ant_channel_id_fieldnames_i
  ant_rx_: ant_rx_fieldnames_i
  ant_tx_: ant_tx_fieldnames_i
  exd_screen_configuration_: exd_screen_configuration_fieldnames_i
  exd_data_field_configuration_: exd_data_field_configuration_fieldnames_i
  exd_data_concept_configuration_: exd_data_concept_configuration_fieldnames_i
  dive_summary_: dive_summary_fieldnames_i
  hrv_: hrv_fieldnames_i
}

export type file_id_fieldnames_i =
  "type" |
  "manufacturer" |
  "product" |
  "serial_number" |
  "time_created" |
  "number" |
  "product_name"


export type file_creator_fieldnames_i =
  "software_version" |
  "hardware_version"

export type timestamp_correlation_fieldnames_i =
  "timestamp" |
  "fractional_timestamp" |
  "system_timestamp" |
  "fractional_system_timestamp" |
  "local_timestamp" |
  "timestamp_ms" |
  "system_timestamp_ms"

export type software_fieldnames_i =
  "message_index" |
  "version" |
  "part_number"

export type slave_device_fieldnames_i =
  "manufacturer" |
  "product"

export type capabilities_fieldnames_i =
  "languages" |
  "sports" |
  "workouts_supported" |
  "connectivity_supported"

export type file_capabilities_fieldnames_i =
  "message_index" |
  "type" |
  "flags" |
  "directory" |
  "max_count" |
  "max_size"

export type mesg_capabilities_fieldnames_i =
  "message_index" |
  "file" |
  "mesg_num" |
  "count_type" |
  "count"

export type field_capabilities_fieldnames_i =
  "message_index" |
  "file" |
  "mesg_num" |
  "field_num" |
  "count"

export type device_settings_fieldnames_i =
  "active_time_zone" |
  "utc_offset" |
  "time_offset" |
  "time_mode" |
  "time_zone_offset" |
  "backlight_mode" |
  "activity_tracker_enabled" |
  "clock_time" |
  "pages_enabled" |
  "move_alert_enabled" |
  "date_mode" |
  "display_orientation" |
  "mounting_side" |
  "default_page" |
  "autosync_min_steps" |
  "autosync_min_time" |
  "lactate_threshold_autodetect_enabled" |
  "ble_auto_upload_enabled" |
  "auto_sync_frequency" |
  "auto_activity_detect" |
  "number_of_screens" |
  "smart_notification_display_orientation" |
  "tap_type" |
  "tap_sensitivity"

export type user_profile_fieldnames_i =
  "message_index" |
  "friendly_name" |
  "gender" |
  "age" |
  "height" |
  "weight" |
  "language" |
  "elev_setting" |
  "weight_setting" |
  "resting_heart_rate" |
  "default_max_running_heart_rate" |
  "default_max_biking_heart_rate" |
  "default_max_heart_rate" |
  "hr_setting" |
  "speed_setting" |
  "dist_setting" |
  "power_setting" |
  "activity_class" |
  "position_setting" |
  "temperature_setting" |
  "local_id" |
  "global_id" |
  "wake_time" | //NOTE: the localtime wasn't being called properly?
  "sleep_time" |
  "height_setting" |
  "user_running_step_length" |
  "user_walking_step_length" |
  "depth_setting" |
  "dive_count"

export type hrm_profile_fieldnames_i =
  "message_index" |
  "enabled" |
  "hrm_ant_id" |
  "log_hrv" |
  "hrm_ant_id_trans_type"

export type sdm_profile_fieldnames_i =
  "message_index" |
  "enabled" |
  "sdm_ant_id" |
  "sdm_cal_factor" |
  "odometer" |
  "speed_source" |
  "sdm_ant_id_trans_type" |
  "odometer_rollover"

export type bike_profile_fieldnames_i =
  "message_index" |
  "name" |
  "sport" |
  "sub_sport" |
  "odometer" |
  "bike_spd_ant_id" |
  "bike_cad_ant_id" |
  "bike_spdcad_ant_id" |
  "bike_power_ant_id" |
  "custom_wheelsize" |
  "auto_wheelsize" |
  "bike_weight" |
  "power_cal_factor" |
  "auto_wheel_cal" |
  "auto_power_zero" |
  "id" |
  "spd_enabled" |
  "cad_enabled" |
  "spdcad_enabled" |
  "power_enabled" |
  "crank_length" |
  "enabled" |
  "bike_spd_ant_id_trans_type" |
  "bike_cad_ant_id_trans_type" |
  "bike_spdcad_ant_id_trans_type" |
  "bike_power_ant_id_trans_type" |
  "odometer_rollover" |
  "front_gear_num" |
  "front_gear" |
  "rear_gear_num" |
  "rear_gear" |
  "shimano_di2_enabled"

export type connectivity_fieldnames_i =
  "bluetooth_enabled" |
  "bluetooth_le_enabled" |
  "ant_enabled" |
  "name" |
  "live_tracking_enabled" |
  "weather_conditions_enabled" |
  "weather_alerts_enabled" |
  "auto_activity_upload_enabled" |
  "course_download_enabled" |
  "workout_download_enabled" |
  "gps_ephemeris_download_enabled" |
  "incident_detection_enabled" |
  "grouptrack_enabled"

export type watchface_settings_fieldnames_i =
  "message_index" |
  "mode" |
  "layout"

export type ohr_settings_fieldnames_i =
  "timestamp" |
  "enabled"

export type zones_target_fieldnames_i =
  "max_heart_rate" |
  "threshold_heart_rate" |
  "functional_threshold_power" |
  "hr_calc_type" |
  "pwr_calc_type"

export type sport_fieldnames_i =
  "sport" |
  "sub_sport" |
  "name"

export type hr_zone_fieldnames_i =
  "message_index" |
  "high_bpm" |
  "name"

export type speed_zone_fieldnames_i =
  "message_index" |
  "high_value" |
  "name"

export type cadence_zone_fieldnames_i =
  "message_index" |
  "high_value" |
  "name"

export type power_zone_fieldnames_i =
  "message_index" |
  "high_value" |
  "name"

export type met_zone_fieldnames_i =
  "message_index" |
  "high_bpm" |
  "calories" |
  "fat_calories"

export type dive_settings_fieldnames_i =
  "message_index" |
  "name" |
  "model" |
  "gf_low" |
  "gf_high" |
  "water_type" |
  "water_density" |
  "po2_warn" |
  "po2_critical" |
  "po2_deco" |
  "safety_stop_enabled" |
  "bottom_depth" |
  "bottom_time" |
  "apnea_countdown_enabled" |
  "apnea_countdown_time" |
  "backlight_mode" |
  "backlight_brightness" |
  "backlight_timeout" |
  "repeat_dive_interval" |
  "safety_stop_time" |
  "heart_rate_source_type" |
  "heart_rate_source"

export type dive_alarm_fieldnames_i =
  "message_index" |
  "depth" |
  "time" |
  "enabled" |
  "alarm_type" |
  "sound" |
  "dive_types"

export type dive_gas_fieldnames_i =
  "message_index" |
  "helium_content" |
  "oxygen_content" |
  "status"

export type goal_fieldnames_i =
  "message_index" |
  "sport" |
  "sub_sport" |
  "start_date" |
  "end_date" |
  "type" |
  "value" |
  "repeat" |
  "target_value" |
  "recurrence" |
  "recurrence_value" |
  "enabled" |
  "source"

export type activity_fieldnames_i =
  "timestamp" |
  "total_timer_time" |
  "num_sessions" |
  "type" |
  "event" |
  "event_type" |
  "local_timestamp" |
  "event_group"

export type session_fieldnames_i =
  "message_index" |
  "timestamp" |
  "event" |
  "event_type" |
  "start_time" |
  "start_position_lat" |
  "start_position_long" |
  "sport" |
  "sub_sport" |
  "total_elapsed_time" |
  "total_timer_time" |
  "total_distance" |
  "total_cycles" |
  "total_calories" |
  "total_fat_calories" |
  "avg_speed" |
  "max_speed" |
  "avg_heart_rate" |
  "max_heart_rate" |
  "avg_cadence" |
  "max_cadence" |
  "avg_power" |
  "max_power" |
  "total_ascent" |
  "total_descent" |
  "total_training_effect" |
  "first_lap_index" |
  "num_laps" |
  "event_group" |
  "trigger" |
  "nec_lat" |
  "nec_long" |
  "swc_lat" |
  "swc_long" |
  "num_lengths" |
  "normalized_power" |
  "training_stress_score" |
  "intensity_factor" |
  "left_right_balance" |
  "avg_stroke_count" |
  "avg_stroke_distance" |
  "swim_stroke" |
  "pool_length" |
  "threshold_power" |
  "pool_length_unit" |
  "num_active_lengths" |
  "total_work" |
  "avg_altitude" |
  "max_altitude" |
  "gps_accuracy" |
  "avg_grade" |
  "avg_pos_grade" |
  "avg_neg_grade" |
  "max_pos_grade" |
  "max_neg_grade" |
  "avg_temperature" |
  "max_temperature" |
  "total_moving_time" |
  "avg_pos_vertical_speed" |
  "avg_neg_vertical_speed" |
  "max_pos_vertical_speed" |
  "max_neg_vertical_speed" |
  "min_heart_rate" |
  "time_in_hr_zone" |
  "time_in_speed_zone" |
  "time_in_cadence_zone" |
  "time_in_power_zone" |
  "avg_lap_time" |
  "best_lap_index" |
  "min_altitude" |
  "player_score" |
  "opponent_score" |
  "opponent_name" |
  "stroke_count" |
  "zone_count" |
  "max_ball_speed" |
  "avg_ball_speed" |
  "avg_vertical_oscillation" |
  "avg_stance_time_percent" |
  "avg_stance_time" |
  "avg_fractional_cadence" |
  "max_fractional_cadence" |
  "total_fractional_cycles" |
  "avg_total_hemoglobin_conc" |
  "min_total_hemoglobin_conc" |
  "max_total_hemoglobin_conc" |
  "avg_saturated_hemoglobin_percent" |
  "min_saturated_hemoglobin_percent" |
  "max_saturated_hemoglobin_percent" |
  "avg_left_torque_effectiveness" |
  "avg_right_torque_effectiveness" |
  "avg_left_pedal_smoothness" |
  "avg_right_pedal_smoothness" |
  "avg_combined_pedal_smoothness" |
  "sport_index" |
  "time_standing" |
  "stand_count" |
  "avg_left_pco" |
  "avg_right_pco" |
  "avg_left_power_phase" |
  "avg_left_power_phase_peak" |
  "avg_right_power_phase" |
  "avg_right_power_phase_peak" |
  "avg_power_position" |
  "max_power_position" |
  "avg_cadence_position" |
  "max_cadence_position" |
  "enhanced_avg_speed" |
  "enhanced_max_speed" |
  "enhanced_avg_altitude" |
  "enhanced_min_altitude" |
  "enhanced_max_altitude" |
  "avg_lev_motor_power" |
  "max_lev_motor_power" |
  "lev_battery_consumption" |
  "avg_vertical_ratio" |
  "avg_stance_time_balance" |
  "avg_step_length" |
  "total_anaerobic_training_effect" |
  "avg_vam" |
  "training_load_peak" |
  "total_grit" |
  "total_flow" |
  "jump_count" |
  "avg_grit" |
  "avg_flow" |
  "total_fractional_ascent" |
  "total_fractional_descent" |
  "avg_core_temperature" |
  "min_core_temperature" |
  "max_core_temperature"

export type lap_fieldnames_i =
  "message_index" |
  "timestamp" |
  "event" |
  "event_type" |
  "start_time" |
  "start_position_lat" |
  "start_position_long" |
  "end_position_lat" |
  "end_position_long" |
  "total_elapsed_time" |
  "total_timer_time" |
  "total_distance" |
  "total_cycles" |
  "total_calories" |
  "total_fat_calories" |
  "avg_speed" |
  "max_speed" |
  "avg_heart_rate" |
  "max_heart_rate" |
  "avg_cadence" |
  "max_cadence" |
  "avg_power" |
  "max_power" |
  "total_ascent" |
  "total_descent" |
  "intensity" |
  "lap_trigger" |
  "sport" |
  "event_group" |
  "num_lengths" |
  "normalized_power" |
  "left_right_balance" |
  "first_length_index" |
  "avg_stroke_distance" |
  "swim_stroke" |
  "sub_sport" |
  "num_active_lengths" |
  "total_work" |
  "avg_altitude" |
  "max_altitude" |
  "gps_accuracy" |
  "avg_grade" |
  "avg_pos_grade" |
  "avg_neg_grade" |
  "max_pos_grade" |
  "max_neg_grade" |
  "avg_temperature" |
  "max_temperature" |
  "total_moving_time" |
  "avg_pos_vertical_speed" |
  "avg_neg_vertical_speed" |
  "max_pos_vertical_speed" |
  "max_neg_vertical_speed" |
  "time_in_hr_zone" |
  "time_in_speed_zone" |
  "time_in_cadence_zone" |
  "time_in_power_zone" |
  "repetition_num" |
  "min_altitude" |
  "min_heart_rate" |
  "wkt_step_index" |
  "opponent_score" |
  "stroke_count" |
  "zone_count" |
  "avg_vertical_oscillation" |
  "avg_stance_time_percent" |
  "avg_stance_time" |
  "avg_fractional_cadence" |
  "max_fractional_cadence" |
  "total_fractional_cycles" |
  "player_score" |
  "avg_total_hemoglobin_conc" |
  "min_total_hemoglobin_conc" |
  "max_total_hemoglobin_conc" |
  "avg_saturated_hemoglobin_percent" |
  "min_saturated_hemoglobin_percent" |
  "max_saturated_hemoglobin_percent" |
  "avg_left_torque_effectiveness" |
  "avg_right_torque_effectiveness" |
  "avg_left_pedal_smoothness" |
  "avg_right_pedal_smoothness" |
  "avg_combined_pedal_smoothness" |
  "time_standing" |
  "stand_count" |
  "avg_left_pco" |
  "avg_right_pco" |
  "avg_left_power_phase" |
  "avg_left_power_phase_peak" |
  "avg_right_power_phase" |
  "avg_right_power_phase_peak" |
  "avg_power_position" |
  "max_power_position" |
  "avg_cadence_position" |
  "max_cadence_position" |
  "enhanced_avg_speed" |
  "enhanced_max_speed" |
  "enhanced_avg_altitude" |
  "enhanced_min_altitude" |
  "enhanced_max_altitude" |
  "avg_lev_motor_power" |
  "max_lev_motor_power" |
  "lev_battery_consumption" |
  "avg_vertical_ratio" |
  "avg_stance_time_balance" |
  "avg_step_length" |
  "avg_vam" |
  "total_grit" |
  "total_flow" |
  "jump_count" |
  "avg_grit" |
  "avg_flow" |
  "total_fractional_ascent" |
  "total_fractional_descent" |
  "avg_core_temperature" |
  "min_core_temperature" |
  "max_core_temperature"

export type _length_fieldnames_i = //  Static property 'length' conflicts with built-in property 'Function.length' of constructor function 'FitMessages'.
  "message_index" |
  "timestamp" |
  "event" |
  "event_type" |
  "start_time" |
  "total_elapsed_time" |
  "total_timer_time" |
  "total_strokes" |
  "avg_speed" |
  "swim_stroke" |
  "avg_swimming_cadence" |
  "event_group" |
  "total_calories" |
  "length_type" |
  "player_score" |
  "opponent_score" |
  "stroke_count" |
  "zone_count"

export type record_fieldnames_i =
  "timestamp" |
  "position_lat" |
  "position_long" |
  "altitude" |
  "heart_rate" |
  "cadence" |
  "distance" |
  "speed" |
  "power" |
  "compressed_speed_distance" |
  "grade" |
  "resistance" |
  "time_from_course" |
  "cycle_length" |
  "temperature" |
  "speed_1s" |
  "cycles" |
  "total_cycles" |
  "compressed_accumulated_power" |
  "accumulated_power" |
  "left_right_balance" |
  "gps_accuracy" |
  "vertical_speed" |
  "calories" |
  "vertical_oscillation" |
  "stance_time_percent" |
  "stance_time" |
  "activity_type" |
  "left_torque_effectiveness" |
  "right_torque_effectiveness" |
  "left_pedal_smoothness" |
  "right_pedal_smoothness" |
  "combined_pedal_smoothness" |
  "time128" |
  "stroke_type" |
  "zone" |
  "ball_speed" |
  "cadence256" |
  "fractional_cadence" |
  "total_hemoglobin_conc" |
  "total_hemoglobin_conc_min" |
  "total_hemoglobin_conc_max" |
  "saturated_hemoglobin_percent" |
  "saturated_hemoglobin_percent_min" |
  "saturated_hemoglobin_percent_max" |
  "device_index" |
  "left_pco" |
  "right_pco" |
  "left_power_phase" |
  "left_power_phase_peak" |
  "right_power_phase" |
  "right_power_phase_peak" |
  "enhanced_speed" |
  "enhanced_altitude" |
  "battery_soc" |
  "motor_power" |
  "vertical_ratio" |
  "stance_time_balance" |
  "step_length" |
  "absolute_pressure" |
  "depth" |
  "next_stop_depth" |
  "next_stop_time" |
  "time_to_surface" |
  "ndl_time" |
  "cns_load" |
  "n2_load" |
  "grit" |
  "flow" |
  "ebike_travel_range" |
  "ebike_battery_level" |
  "ebike_assist_mode" |
  "ebike_assist_level_percent" |
  "core_temperature"

export type event_fieldnames_i =
  "timestamp" |
  "event" |
  "event_type" |
  "data16" |
  "data" |
  "event_group" |
  "score" |
  "opponent_score" |
  "front_gear_num" |
  "front_gear" |
  "rear_gear_num" |
  "rear_gear" |
  "device_index" |
  "radar_threat_level_max" |
  "radar_threat_count" |
  "radar_threat_avg_approach_speed" |
  "radar_threat_max_approach_speed"

export type device_info_fieldnames_i =
  "timestamp" |
  "device_index" |
  "device_type" |
  "manufacturer" |
  "serial_number" |
  "product" |
  "software_version" |
  "hardware_version" |
  "cum_operating_time" |
  "battery_voltage" |
  "battery_status" |
  "sensor_position" |
  "descriptor" |
  "ant_transmission_type" |
  "ant_device_number" |
  "ant_network" |
  "source_type" |
  "product_name" |
  "battery_level"

export type device_aux_battery_info_fieldnames_i =
  "timestamp" |
  "device_index" |
  "battery_voltage" |
  "battery_status" |
  "battery_identifier"

export type training_file_fieldnames_i =
  "timestamp" |
  "type" |
  "manufacturer" |
  "product" |
  "serial_number" |
  "time_created"

export type weather_conditions_fieldnames_i =
  "timestamp" |
  "weather_report" |
  "temperature" |
  "condition" |
  "wind_direction" |
  "wind_speed" |
  "precipitation_probability" |
  "temperature_feels_like" |
  "relative_humidity" |
  "location" |
  "observed_at_time" |
  "observed_location_lat" |
  "observed_location_long" |
  "day_of_week" |
  "high_temperature" |
  "low_temperature"

export type weather_alert_fieldnames_i =
  "timestamp" |
  "report_id" |
  "issue_time" |
  "expire_time" |
  "severity" |
  "type"

export type gps_metadata_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "position_lat" |
  "position_long" |
  "enhanced_altitude" |
  "enhanced_speed" |
  "heading" |
  "utc_timestamp" |
  "velocity"

export type camera_event_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "camera_event_type" |
  "camera_file_uuid" |
  "camera_orientation"

export type gyroscope_data_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "sample_time_offset" |
  "gyro_x" |
  "gyro_y" |
  "gyro_z" |
  "calibrated_gyro_x" |
  "calibrated_gyro_y" |
  "calibrated_gyro_z"

export type accelerometer_data_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "sample_time_offset" |
  "accel_x" |
  "accel_y" |
  "accel_z" |
  "calibrated_accel_x" |
  "calibrated_accel_y" |
  "calibrated_accel_z" |
  "compressed_calibrated_accel_x" |
  "compressed_calibrated_accel_y" |
  "compressed_calibrated_accel_z"

export type magnetometer_data_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "sample_time_offset" |
  "mag_x" |
  "mag_y" |
  "mag_z" |
  "calibrated_mag_x" |
  "calibrated_mag_y" |
  "calibrated_mag_z"

export type barometer_data_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "sample_time_offset" |
  "baro_pres"

export type three_d_sensor_calibration_fieldnames_i =
  "timestamp" |
  "sensor_type" |
  "calibration_factor" |
  "calibration_divisor" |
  "level_shift" |
  "offset_cal" |
  "orientation_matrix"

export type one_d_sensor_calibration_fieldnames_i =
  "timestamp" |
  "sensor_type" |
  "calibration_factor" |
  "calibration_divisor" |
  "level_shift" |
  "offset_cal"

export type video_frame_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "frame_number"

export type obdii_data_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "time_offset" |
  "pid" |
  "raw_data" |
  "pid_data_size" |
  "system_time" |
  "start_timestamp" |
  "start_timestamp_ms"

export type nmea_sentence_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "sentence"

export type aviation_attitude_fieldnames_i =
  "timestamp" |
  "timestamp_ms" |
  "system_time" |
  "pitch" |
  "roll" |
  "accel_lateral" |
  "accel_normal" |
  "turn_rate" |
  "stage" |
  "attitude_stage_complete" |
  "track" |
  "validity"

export type video_fieldnames_i =
  "url" |
  "hosting_provider" |
  "duration"

export type video_title_fieldnames_i =
  "message_index" |
  "message_count" |
  "text"

export type video_description_fieldnames_i =
  "message_index" |
  "message_count" |
  "text"

export type video_clip_fieldnames_i =
  "clip_number" |
  "start_timestamp" |
  "start_timestamp_ms" |
  "end_timestamp" |
  "end_timestamp_ms" |
  "clip_start" |
  "clip_end"

export type set_fieldnames_i =
  "timestamp" |
  "duration" |
  "repetitions" |
  "weight" |
  "set_type" |
  "start_time" |
  "category" |
  "category_subtype" |
  "weight_display_unit" |
  "message_index" |
  "wkt_step_index"

export type jump_fieldnames_i =
  "timestamp" |
  "distance" |
  "height" |
  "rotations" |
  "hang_time" |
  "score" |
  "position_lat" |
  "position_long" |
  "speed" |
  "enhanced_speed"

export type climb_pro_fieldnames_i =
  "timestamp" |
  "position_lat" |
  "position_long" |
  "climb_pro_event" |
  "climb_number" |
  "climb_category" |
  "current_dist"

export type field_description_fieldnames_i =
  "developer_data_index" |
  "field_definition_number" |
  "fit_base_type_id" |
  "field_name" |
  "array" |
  "components" |
  "scale" |
  "offset" |
  "units" |
  "bits" |
  "accumulate" |
  "fit_base_unit_id" |
  "native_mesg_num" |
  "native_field_num"

export type developer_data_id_fieldnames_i =
  "developer_id" |
  "application_id" |
  "manufacturer_id" |
  "developer_data_index" |
  "application_version"

export type course_fieldnames_i =
  "sport" |
  "name" |
  "capabilities" |
  "sub_sport"

export type course_point_fieldnames_i =
  "message_index" |
  "timestamp" |
  "position_lat" |
  "position_long" |
  "distance" |
  "type" |
  "name" |
  "favorite"

export type segment_id_fieldnames_i =
  "name" |
  "uuid" |
  "sport" |
  "enabled" |
  "user_profile_primary_key" |
  "device_id" |
  "default_race_leader" |
  "delete_status" |
  "selection_type"

export type segment_leaderboard_entry_fieldnames_i =
  "message_index" |
  "name" |
  "type" |
  "group_primary_key" |
  "activity_id" |
  "segment_time" |
  "activity_id_string"

export type segment_point_fieldnames_i =
  "message_index" |
  "position_lat" |
  "position_long" |
  "distance" |
  "altitude" |
  "leader_time"

export type segment_lap_fieldnames_i =
  "message_index" |
  "timestamp" |
  "event" |
  "event_type" |
  "start_time" |
  "start_position_lat" |
  "start_position_long" |
  "end_position_lat" |
  "end_position_long" |
  "total_elapsed_time" |
  "total_timer_time" |
  "total_distance" |
  "total_cycles" |
  "total_calories" |
  "total_fat_calories" |
  "avg_speed" |
  "max_speed" |
  "avg_heart_rate" |
  "max_heart_rate" |
  "avg_cadence" |
  "max_cadence" |
  "avg_power" |
  "max_power" |
  "total_ascent" |
  "total_descent" |
  "sport" |
  "event_group" |
  "nec_lat" |
  "nec_long" |
  "swc_lat" |
  "swc_long" |
  "name" |
  "normalized_power" |
  "left_right_balance" |
  "sub_sport" |
  "total_work" |
  "avg_altitude" |
  "max_altitude" |
  "gps_accuracy" |
  "avg_grade" |
  "avg_pos_grade" |
  "avg_neg_grade" |
  "max_pos_grade" |
  "max_neg_grade" |
  "avg_temperature" |
  "max_temperature" |
  "total_moving_time" |
  "avg_pos_vertical_speed" |
  "avg_neg_vertical_speed" |
  "max_pos_vertical_speed" |
  "max_neg_vertical_speed" |
  "time_in_hr_zone" |
  "time_in_speed_zone" |
  "time_in_cadence_zone" |
  "time_in_power_zone" |
  "repetition_num" |
  "min_altitude" |
  "min_heart_rate" |
  "active_time" |
  "wkt_step_index" |
  "sport_event" |
  "avg_left_torque_effectiveness" |
  "avg_right_torque_effectiveness" |
  "avg_left_pedal_smoothness" |
  "avg_right_pedal_smoothness" |
  "avg_combined_pedal_smoothness" |
  "status" |
  "uuid" |
  "avg_fractional_cadence" |
  "max_fractional_cadence" |
  "total_fractional_cycles" |
  "front_gear_shift_count" |
  "rear_gear_shift_count" |
  "time_standing" |
  "stand_count" |
  "avg_left_pco" |
  "avg_right_pco" |
  "avg_left_power_phase" |
  "avg_left_power_phase_peak" |
  "avg_right_power_phase" |
  "avg_right_power_phase_peak" |
  "avg_power_position" |
  "max_power_position" |
  "avg_cadence_position" |
  "max_cadence_position" |
  "manufacturer" |
  "total_grit" |
  "total_flow" |
  "avg_grit" |
  "avg_flow" |
  "total_fractional_ascent" |
  "total_fractional_descent"

export type segment_file_fieldnames_i =
  "message_index" |
  "file_uuid" |
  "enabled" |
  "user_profile_primary_key" |
  "leader_type" |
  "leader_group_primary_key" |
  "leader_activity_id" |
  "leader_activity_id_string" |
  "default_race_leader"

export type workout_fieldnames_i =
  "sport" |
  "capabilities" |
  "num_valid_steps" |
  "wkt_name" |
  "sub_sport" |
  "pool_length" |
  "pool_length_unit"

export type workout_session_fieldnames_i =
  "message_index" |
  "sport" |
  "sub_sport" |
  "num_valid_steps" |
  "first_step_index" |
  "pool_length" |
  "pool_length_unit"

export type workout_step_fieldnames_i =
  "message_index" |
  "wkt_step_name" |
  "duration_type" |
  "duration_value" |
  "target_type" |
  "target_value" |
  "custom_target_value_low" |
  "custom_target_value_high" |
  "intensity" |
  "notes" |
  "equipment" |
  "exercise_category" |
  "exercise_name" |
  "exercise_weight" |
  "weight_display_unit" |
  "secondary_target_type" |
  "secondary_target_value" |
  "secondary_custom_target_value_low" |
  "secondary_custom_target_value_high"

export type exercise_title_fieldnames_i =
  "message_index" |
  "exercise_category" |
  "exercise_name" |
  "wkt_step_name"

export type schedule_fieldnames_i =
  "manufacturer" |
  "product" |
  "serial_number" |
  "time_created" |
  "completed" |
  "type" |
  "scheduled_time"

export type totals_fieldnames_i =
  "message_index" |
  "timestamp" |
  "timer_time" |
  "distance" |
  "calories" |
  "sport" |
  "elapsed_time" |
  "sessions" |
  "active_time" |
  "sport_index"

export type weight_scale_fieldnames_i =
  "timestamp" |
  "weight" |
  "percent_fat" |
  "percent_hydration" |
  "visceral_fat_mass" |
  "bone_mass" |
  "muscle_mass" |
  "basal_met" |
  "physique_rating" |
  "active_met" |
  "metabolic_age" |
  "visceral_fat_rating" |
  "user_profile_index"

export type blood_pressure_fieldnames_i =
  "timestamp" |
  "systolic_pressure" |
  "diastolic_pressure" |
  "mean_arterial_pressure" |
  "map_3_sample_mean" |
  "map_morning_values" |
  "map_evening_values" |
  "heart_rate" |
  "heart_rate_type" |
  "status" |
  "user_profile_index"

export type monitoring_info_fieldnames_i =
  "timestamp" |
  "local_timestamp" |
  "activity_type" |
  "cycles_to_distance" |
  "cycles_to_calories" |
  "resting_metabolic_rate"

export type monitoring_fieldnames_i =
  "timestamp" |
  "device_index" |
  "calories" |
  "distance" |
  "cycles" |
  "active_time" |
  "activity_type" |
  "activity_subtype" |
  "activity_level" |
  "distance_16" |
  "cycles_16" |
  "active_time_16" |
  "local_timestamp" |
  "temperature" |
  "temperature_min" |
  "temperature_max" |
  "activity_time" |
  "active_calories" |
  "current_activity_type_intensity" |
  "timestamp_min_8" |
  "timestamp_16" |
  "heart_rate" |
  "intensity" |
  "duration_min" |
  "duration" |
  "ascent" |
  "descent" |
  "moderate_activity_minutes" |
  "vigorous_activity_minutes"

export type hr_fieldnames_i =
  "timestamp" |
  "fractional_timestamp" |
  "time256" |
  "filtered_bpm" |
  "event_timestamp" |
  "event_timestamp_12"

export type stress_level_fieldnames_i =
  "stress_level_value" |
  "stress_level_time"

export type memo_glob_fieldnames_i =
  "part_index" |
  "memo" |
  "message_number" |
  "message_index"

export type ant_channel_id_fieldnames_i =
  "channel_number" |
  "device_type" |
  "device_number" |
  "transmission_type" |
  "device_index"

export type ant_rx_fieldnames_i =
  "timestamp" |
  "fractional_timestamp" |
  "mesg_id" |
  "mesg_data" |
  "channel_number" |
  "data"

export type ant_tx_fieldnames_i =
  "timestamp" |
  "fractional_timestamp" |
  "mesg_id" |
  "mesg_data" |
  "channel_number" |
  "data"

export type exd_screen_configuration_fieldnames_i =
  "screen_index" |
  "field_count" |
  "layout" |
  "screen_enabled"

export type exd_data_field_configuration_fieldnames_i =
  "screen_index" |
  "concept_field" |
  "field_id" |
  "concept_count" |
  "display_type" |
  "title"

export type exd_data_concept_configuration_fieldnames_i =
  "screen_index" |
  "concept_field" |
  "field_id" |
  "concept_index" |
  "data_page" |
  "concept_key" |
  "scaling" |
  "data_units" |
  "qualifier" |
  "descriptor" |
  "is_signed"

export type dive_summary_fieldnames_i =
  "timestamp" |
  "reference_mesg" |
  "reference_index" |
  "avg_depth" |
  "max_depth" |
  "surface_interval" |
  "start_cns" |
  "end_cns" |
  "start_n2" |
  "end_n2" |
  "o2_toxicity" |
  "dive_number" |
  "bottom_time" |
  "avg_ascent_rate" |
  "avg_descent_rate" |
  "max_ascent_rate" |
  "max_descent_rate" |
  "hang_time"

export type hrv_fieldnames_i =
  "time"


export type AllFieldNames = FieldNamesI[keyof FieldNamesI][]
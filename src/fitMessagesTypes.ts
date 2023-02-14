import { Field } from "./fitTypes";

export default interface FitMessagesI {
  file_id: file_idT
  file_creator: file_creatorT
  timestamp_correlation: timestamp_correlationT
  software: softwareT
  slave_device: slave_deviceT
  capabilities: capabilitiesT
  file_capabilities: file_capabilitiesT
  mesg_capabilities: mesg_capabilitiesT
  field_capabilities: field_capabilitiesT
  device_settings: device_settingsT
  user_profile: user_profileT
  hrm_profile: hrm_profileT
  sdm_profile: sdm_profileT
  bike_profile: bike_profileT
  connectivity: connectivityT
  watchface_settings: watchface_settingsT
  ohr_settings: ohr_settingsT
  zones_target: zones_targetT
  sport: sportT
  hr_zone: hr_zoneT
  speed_zone: speed_zoneT
  cadence_zone: cadence_zoneT
  power_zone: power_zoneT
  met_zone: met_zoneT
  dive_settings: dive_settingsT
  dive_alarm: dive_alarmT
  dive_gas: dive_gasT
  goal: goalT
  activity: activityT
  session: sessionT
  lap: lapT
  _length: _lengthT
  record: recordT
  event: eventT
  device_info: device_infoT
  device_aux_battery_info: device_aux_battery_infoT
  training_file: training_fileT
  weather_conditions: weather_conditionsT
  weather_alert: weather_alertT
  gps_metadata: gps_metadataT
  camera_event: camera_eventT
  gyroscope_data: gyroscope_dataT
  accelerometer_data: accelerometer_dataT
  magnetometer_data: magnetometer_dataT
  barometer_data: barometer_dataT
  three_d_sensor_calibration: three_d_sensor_calibrationT
  one_d_sensor_calibration: one_d_sensor_calibrationT
  video_frame: video_frameT
  obdii_data: obdii_dataT
  nmea_sentence: nmea_sentenceT
  aviation_attitude: aviation_attitudeT
  video: videoT
  video_title: video_titleT
  video_description: video_descriptionT
  video_clip: video_clipT
  set: setT
  jump: jumpT
  climb_pro: climb_proT
  field_description: field_descriptionT
  developer_data_id: developer_data_idT
  course: courseT
  course_point: course_pointT
  segment_id: segment_idT
  segment_leaderboard_entry: segment_leaderboard_entryT
  segment_point: segment_pointT
  segment_lap: segment_lapT
  segment_file: segment_fileT
  workout: workoutT
  workout_session: workout_sessionT
  workout_step: workout_stepT
  exercise_title: exercise_titleT
  schedule: scheduleT
  totals: totalsT
  weight_scale: weight_scaleT
  blood_pressure: blood_pressureT
  monitoring_info: monitoring_infoT
  monitoring: monitoringT
  hr: hrT
  stress_level: stress_levelT
  memo_glob: memo_globT
  ant_channel_id: ant_channel_idT
  ant_rx: ant_rxT
  ant_tx: ant_txT
  exd_screen_configuration: exd_screen_configurationT
  exd_data_field_configuration: exd_data_field_configurationT
  exd_data_concept_configuration: exd_data_concept_configurationT
  dive_summary: dive_summaryT
  hrv: hrvT
}

export type file_idT = {
  "type": Field
  "manufacturer": Field
  "product": Field
  "serial_number": Field
  "time_created": Field
  "number": Field
  "product_name": Field
};

export type file_creatorT = {
  "software_version": Field
  "hardware_version": Field
};

export type timestamp_correlationT = {
  "timestamp": Field
  "fractional_timestamp": Field
  "system_timestamp": Field
  "fractional_system_timestamp": Field
  "local_timestamp": Field
  "timestamp_ms": Field
  "system_timestamp_ms": Field
};

export type softwareT = {
  "message_index": Field
  "version": Field
  "part_number": Field
};

export type slave_deviceT = {
  "manufacturer": Field
  "product": Field
};

export type capabilitiesT = {
  "languages": Field
  "sports": Field
  "workouts_supported": Field
  "connectivity_supported": Field
};

export type file_capabilitiesT = {
  "message_index": Field
  "type": Field
  "flags": Field
  "directory": Field
  "max_count": Field
  "max_size": Field
};

export type mesg_capabilitiesT = {
  "message_index": Field
  "file": Field
  "mesg_num": Field
  "count_type": Field
  "count": Field
};

export type field_capabilitiesT = {
  "message_index": Field
  "file": Field
  "mesg_num": Field
  "field_num": Field
  "count": Field
};

export type device_settingsT = {
  "active_time_zone": Field
  "utc_offset": Field
  "time_offset": Field
  "time_mode": Field
  "time_zone_offset": Field
  "backlight_mode": Field
  "activity_tracker_enabled": Field
  "clock_time": Field
  "pages_enabled": Field
  "move_alert_enabled": Field
  "date_mode": Field
  "display_orientation": Field
  "mounting_side": Field
  "default_page": Field
  "autosync_min_steps": Field
  "autosync_min_time": Field
  "lactate_threshold_autodetect_enabled": Field
  "ble_auto_upload_enabled": Field
  "auto_sync_frequency": Field
  "auto_activity_detect": Field
  "number_of_screens": Field
  "smart_notification_display_orientation": Field
  "tap_interface": Field
  "tap_sensitivity": Field
};

export type user_profileT = {
  "message_index": Field
  "friendly_name": Field
  "gender": Field
  "age": Field
  "height": Field
  "weight": Field
  "language": Field
  "elev_setting": Field
  "weight_setting": Field
  "resting_heart_rate": Field
  "default_max_running_heart_rate": Field
  "default_max_biking_heart_rate": Field
  "default_max_heart_rate": Field
  "hr_setting": Field
  "speed_setting": Field
  "dist_setting": Field
  "power_setting": Field
  "activity_class": Field
  "position_setting": Field
  "temperature_setting": Field
  "local_id": Field
  "global_id": Field
  "wake_time": Field
  "sleep_time": Field
  "height_setting": Field
  "user_running_step_length": Field
  "user_walking_step_length": Field
  "depth_setting": Field
  "dive_count": Field
};

export type hrm_profileT = {
  "message_index": Field
  "enabled": Field
  "hrm_ant_id": Field
  "log_hrv": Field
  "hrm_ant_id_trans_type": Field
};

export type sdm_profileT = {
  "message_index": Field
  "enabled": Field
  "sdm_ant_id": Field
  "sdm_cal_factor": Field
  "odometer": Field
  "speed_source": Field
  "sdm_ant_id_trans_type": Field
  "odometer_rollover": Field
};

export type bike_profileT = {
  "message_index": Field
  "name": Field
  "sport": Field
  "sub_sport": Field
  "odometer": Field
  "bike_spd_ant_id": Field
  "bike_cad_ant_id": Field
  "bike_spdcad_ant_id": Field
  "bike_power_ant_id": Field
  "custom_wheelsize": Field
  "auto_wheelsize": Field
  "bike_weight": Field
  "power_cal_factor": Field
  "auto_wheel_cal": Field
  "auto_power_zero": Field
  "id": Field
  "spd_enabled": Field
  "cad_enabled": Field
  "spdcad_enabled": Field
  "power_enabled": Field
  "crank_length": Field
  "enabled": Field
  "bike_spd_ant_id_trans_type": Field
  "bike_cad_ant_id_trans_type": Field
  "bike_spdcad_ant_id_trans_type": Field
  "bike_power_ant_id_trans_type": Field
  "odometer_rollover": Field
  "front_gear_num": Field
  "front_gear": Field
  "rear_gear_num": Field
  "rear_gear": Field
  "shimano_di2_enabled": Field
};

export type connectivityT = {
  "bluetooth_enabled": Field
  "bluetooth_le_enabled": Field
  "ant_enabled": Field
  "name": Field
  "live_tracking_enabled": Field
  "weather_conditions_enabled": Field
  "weather_alerts_enabled": Field
  "auto_activity_upload_enabled": Field
  "course_download_enabled": Field
  "workout_download_enabled": Field
  "gps_ephemeris_download_enabled": Field
  "incident_detection_enabled": Field
  "grouptrack_enabled": Field
};

export type watchface_settingsT = {
  "message_index": Field
  "mode": Field
  "layout": Field
};

export type ohr_settingsT = {
  "timestamp": Field
  "enabled": Field
};

export type zones_targetT = {
  "max_heart_rate": Field
  "threshold_heart_rate": Field
  "functional_threshold_power": Field
  "hr_calc_type": Field
  "pwr_calc_type": Field
};

export type sportT = {
  "sport": Field
  "sub_sport": Field
  "name": Field
};

export type hr_zoneT = {
  "message_index": Field
  "high_bpm": Field
  "name": Field
};

export type speed_zoneT = {
  "message_index": Field
  "high_value": Field
  "name": Field
};

export type cadence_zoneT = {
  "message_index": Field
  "high_value": Field
  "name": Field
};

export type power_zoneT = {
  "message_index": Field
  "high_value": Field
  "name": Field
};

export type met_zoneT = {
  "message_index": Field
  "high_bpm": Field
  "calories": Field
  "fat_calories": Field
};

export type dive_settingsT = {
  "message_index": Field
  "name": Field
  "model": Field
  "gf_low": Field
  "gf_high": Field
  "water_type": Field
  "water_density": Field
  "po2_warn": Field
  "po2_critical": Field
  "po2_deco": Field
  "safety_stop_enabled": Field
  "bottom_depth": Field
  "bottom_time": Field
  "apnea_countdown_enabled": Field
  "apnea_countdown_time": Field
  "backlight_mode": Field
  "backlight_brightness": Field
  "backlight_timeout": Field
  "repeat_dive_interval": Field
  "safety_stop_time": Field
  "heart_rate_source_type": Field
  "heart_rate_source": Field
};

export type dive_alarmT = {
  "message_index": Field
  "depth": Field
  "time": Field
  "enabled": Field
  "alarm_type": Field
  "sound": Field
  "dive_types": Field
};

export type dive_gasT = {
  "message_index": Field
  "helium_content": Field
  "oxygen_content": Field
  "status": Field
};

export type goalT = {
  "message_index": Field
  "sport": Field
  "sub_sport": Field
  "start_date": Field
  "end_date": Field
  "type": Field
  "value": Field
  "repeat": Field
  "target_value": Field
  "recurrence": Field
  "recurrence_value": Field
  "enabled": Field
  "source": Field
};

export type activityT = {
  "timestamp": Field
  "total_timer_time": Field
  "num_sessions": Field
  "type": Field
  "event": Field
  "event_type": Field
  "local_timestamp": Field
  "event_group": Field
};

export type sessionT = {
  "message_index": Field
  "timestamp": Field
  "event": Field
  "event_type": Field
  "start_time": Field
  "start_position_lat": Field
  "start_position_long": Field
  "sport": Field
  "sub_sport": Field
  "total_elapsed_time": Field
  "total_timer_time": Field
  "total_distance": Field
  "total_cycles": Field
  "total_calories": Field
  "total_fat_calories": Field
  "avg_speed": Field
  "max_speed": Field
  "avg_heart_rate": Field
  "max_heart_rate": Field
  "avg_cadence": Field
  "max_cadence": Field
  "avg_power": Field
  "max_power": Field
  "total_ascent": Field
  "total_descent": Field
  "total_training_effect": Field
  "first_lap_index": Field
  "num_laps": Field
  "event_group": Field
  "trigger": Field
  "nec_lat": Field
  "nec_long": Field
  "swc_lat": Field
  "swc_long": Field
  "num_lengths": Field
  "normalized_power": Field
  "training_stress_score": Field
  "intensity_factor": Field
  "left_right_balance": Field
  "avg_stroke_count": Field
  "avg_stroke_distance": Field
  "swim_stroke": Field
  "pool_length": Field
  "threshold_power": Field
  "pool_length_unit": Field
  "num_active_lengths": Field
  "total_work": Field
  "avg_altitude": Field
  "max_altitude": Field
  "gps_accuracy": Field
  "avg_grade": Field
  "avg_pos_grade": Field
  "avg_neg_grade": Field
  "max_pos_grade": Field
  "max_neg_grade": Field
  "avg_temperature": Field
  "max_temperature": Field
  "total_moving_time": Field
  "avg_pos_vertical_speed": Field
  "avg_neg_vertical_speed": Field
  "max_pos_vertical_speed": Field
  "max_neg_vertical_speed": Field
  "min_heart_rate": Field
  "time_in_hr_zone": Field
  "time_in_speed_zone": Field
  "time_in_cadence_zone": Field
  "time_in_power_zone": Field
  "avg_lap_time": Field
  "best_lap_index": Field
  "min_altitude": Field
  "player_score": Field
  "opponent_score": Field
  "opponent_name": Field
  "stroke_count": Field
  "zone_count": Field
  "max_ball_speed": Field
  "avg_ball_speed": Field
  "avg_vertical_oscillation": Field
  "avg_stance_time_percent": Field
  "avg_stance_time": Field
  "avg_fractional_cadence": Field
  "max_fractional_cadence": Field
  "total_fractional_cycles": Field
  "avg_total_hemoglobin_conc": Field
  "min_total_hemoglobin_conc": Field
  "max_total_hemoglobin_conc": Field
  "avg_saturated_hemoglobin_percent": Field
  "min_saturated_hemoglobin_percent": Field
  "max_saturated_hemoglobin_percent": Field
  "avg_left_torque_effectiveness": Field
  "avg_right_torque_effectiveness": Field
  "avg_left_pedal_smoothness": Field
  "avg_right_pedal_smoothness": Field
  "avg_combined_pedal_smoothness": Field
  "sport_index": Field
  "time_standing": Field
  "stand_count": Field
  "avg_left_pco": Field
  "avg_right_pco": Field
  "avg_left_power_phase": Field
  "avg_left_power_phase_peak": Field
  "avg_right_power_phase": Field
  "avg_right_power_phase_peak": Field
  "avg_power_position": Field
  "max_power_position": Field
  "avg_cadence_position": Field
  "max_cadence_position": Field
  "enhanced_avg_speed": Field
  "enhanced_max_speed": Field
  "enhanced_avg_altitude": Field
  "enhanced_min_altitude": Field
  "enhanced_max_altitude": Field
  "avg_lev_motor_power": Field
  "max_lev_motor_power": Field
  "lev_battery_consumption": Field
  "avg_vertical_ratio": Field
  "avg_stance_time_balance": Field
  "avg_step_length": Field
  "total_anaerobic_training_effect": Field
  "avg_vam": Field
  "training_load_peak": Field
  "total_grit": Field
  "total_flow": Field
  "jump_count": Field
  "avg_grit": Field
  "avg_flow": Field
  "total_fractional_ascent": Field
  "total_fractional_descent": Field
  "avg_core_temperature": Field
  "min_core_temperature": Field
  "max_core_temperature": Field
};

export type lapT = {
  "message_index": Field
  "timestamp": Field
  "event": Field
  "event_type": Field
  "start_time": Field
  "start_position_lat": Field
  "start_position_long": Field
  "end_position_lat": Field
  "end_position_long": Field
  "total_elapsed_time": Field
  "total_timer_time": Field
  "total_distance": Field
  "total_cycles": Field
  "total_calories": Field
  "total_fat_calories": Field
  "avg_speed": Field
  "max_speed": Field
  "avg_heart_rate": Field
  "max_heart_rate": Field
  "avg_cadence": Field
  "max_cadence": Field
  "avg_power": Field
  "max_power": Field
  "total_ascent": Field
  "total_descent": Field
  "intensity": Field
  "lap_trigger": Field
  "sport": Field
  "event_group": Field
  "num_lengths": Field
  "normalized_power": Field
  "left_right_balance": Field
  "first_length_index": Field
  "avg_stroke_distance": Field
  "swim_stroke": Field
  "sub_sport": Field
  "num_active_lengths": Field
  "total_work": Field
  "avg_altitude": Field
  "max_altitude": Field
  "gps_accuracy": Field
  "avg_grade": Field
  "avg_pos_grade": Field
  "avg_neg_grade": Field
  "max_pos_grade": Field
  "max_neg_grade": Field
  "avg_temperature": Field
  "max_temperature": Field
  "total_moving_time": Field
  "avg_pos_vertical_speed": Field
  "avg_neg_vertical_speed": Field
  "max_pos_vertical_speed": Field
  "max_neg_vertical_speed": Field
  "time_in_hr_zone": Field
  "time_in_speed_zone": Field
  "time_in_cadence_zone": Field
  "time_in_power_zone": Field
  "repetition_num": Field
  "min_altitude": Field
  "min_heart_rate": Field
  "wkt_step_index": Field
  "opponent_score": Field
  "stroke_count": Field
  "zone_count": Field
  "avg_vertical_oscillation": Field
  "avg_stance_time_percent": Field
  "avg_stance_time": Field
  "avg_fractional_cadence": Field
  "max_fractional_cadence": Field
  "total_fractional_cycles": Field
  "player_score": Field
  "avg_total_hemoglobin_conc": Field
  "min_total_hemoglobin_conc": Field
  "max_total_hemoglobin_conc": Field
  "avg_saturated_hemoglobin_percent": Field
  "min_saturated_hemoglobin_percent": Field
  "max_saturated_hemoglobin_percent": Field
  "avg_left_torque_effectiveness": Field
  "avg_right_torque_effectiveness": Field
  "avg_left_pedal_smoothness": Field
  "avg_right_pedal_smoothness": Field
  "avg_combined_pedal_smoothness": Field
  "time_standing": Field
  "stand_count": Field
  "avg_left_pco": Field
  "avg_right_pco": Field
  "avg_left_power_phase": Field
  "avg_left_power_phase_peak": Field
  "avg_right_power_phase": Field
  "avg_right_power_phase_peak": Field
  "avg_power_position": Field
  "max_power_position": Field
  "avg_cadence_position": Field
  "max_cadence_position": Field
  "enhanced_avg_speed": Field
  "enhanced_max_speed": Field
  "enhanced_avg_altitude": Field
  "enhanced_min_altitude": Field
  "enhanced_max_altitude": Field
  "avg_lev_motor_power": Field
  "max_lev_motor_power": Field
  "lev_battery_consumption": Field
  "avg_vertical_ratio": Field
  "avg_stance_time_balance": Field
  "avg_step_length": Field
  "avg_vam": Field
  "total_grit": Field
  "total_flow": Field
  "jump_count": Field
  "avg_grit": Field
  "avg_flow": Field
  "total_fractional_ascent": Field
  "total_fractional_descent": Field
  "avg_core_temperature": Field
  "min_core_temperature": Field
  "max_core_temperature": Field
};

export type _lengthT = { //  export type property 'length' conflicts with built-in property 'Function.length' of constructor function 'FitMessages'.
  "message_index": Field
  "timestamp": Field
  "event": Field
  "event_type": Field
  "start_time": Field
  "total_elapsed_time": Field
  "total_timer_time": Field
  "total_strokes": Field
  "avg_speed": Field
  "swim_stroke": Field
  "avg_swimming_cadence": Field
  "event_group": Field
  "total_calories": Field
  "length_type": Field
  "player_score": Field
  "opponent_score": Field
  "stroke_count": Field
  "zone_count": Field
};

export type recordT = {
  "timestamp": Field
  "position_lat": Field
  "position_long": Field
  "altitude": Field
  "heart_rate": Field
  "cadence": Field
  "distance": Field
  "speed": Field
  "power": Field
  "compressed_speed_distance": Field
  "grade": Field
  "resistance": Field
  "time_from_course": Field
  "cycle_length": Field
  "temperature": Field
  "speed_1s": Field
  "cycles": Field
  "total_cycles": Field
  "compressed_accumulated_power": Field
  "accumulated_power": Field
  "left_right_balance": Field
  "gps_accuracy": Field
  "vertical_speed": Field
  "calories": Field
  "vertical_oscillation": Field
  "stance_time_percent": Field
  "stance_time": Field
  "activity_type": Field
  "left_torque_effectiveness": Field
  "right_torque_effectiveness": Field
  "left_pedal_smoothness": Field
  "right_pedal_smoothness": Field
  "combined_pedal_smoothness": Field
  "time128": Field
  "stroke_type": Field
  "zone": Field
  "ball_speed": Field
  "cadence256": Field
  "fractional_cadence": Field
  "total_hemoglobin_conc": Field
  "total_hemoglobin_conc_min": Field
  "total_hemoglobin_conc_max": Field
  "saturated_hemoglobin_percent": Field
  "saturated_hemoglobin_percent_min": Field
  "saturated_hemoglobin_percent_max": Field
  "device_index": Field
  "left_pco": Field
  "right_pco": Field
  "left_power_phase": Field
  "left_power_phase_peak": Field
  "right_power_phase": Field
  "right_power_phase_peak": Field
  "enhanced_speed": Field
  "enhanced_altitude": Field
  "battery_soc": Field
  "motor_power": Field
  "vertical_ratio": Field
  "stance_time_balance": Field
  "step_length": Field
  "absolute_pressure": Field
  "depth": Field
  "next_stop_depth": Field
  "next_stop_time": Field
  "time_to_surface": Field
  "ndl_time": Field
  "cns_load": Field
  "n2_load": Field
  "grit": Field
  "flow": Field
  "ebike_travel_range": Field
  "ebike_battery_level": Field
  "ebike_assist_mode": Field
  "ebike_assist_level_percent": Field
  "core_temperature": Field
};

export type eventT = {
  "timestamp": Field
  "event": Field
  "event_type": Field
  "data16": Field
  "data": Field
  "event_group": Field
  "score": Field
  "opponent_score": Field
  "front_gear_num": Field
  "front_gear": Field
  "rear_gear_num": Field
  "rear_gear": Field
  "device_index": Field
  "radar_threat_level_max": Field
  "radar_threat_count": Field
  "radar_threat_avg_approach_speed": Field
  "radar_threat_max_approach_speed": Field
};

export type device_infoT = {
  "timestamp": Field
  "device_index": Field
  "device_type": Field
  "manufacturer": Field
  "serial_number": Field
  "product": Field
  "software_version": Field
  "hardware_version": Field
  "cum_operating_time": Field
  "battery_voltage": Field
  "battery_status": Field
  "sensor_position": Field
  "descriptor": Field
  "ant_transmission_type": Field
  "ant_device_number": Field
  "ant_network": Field
  "source_type": Field
  "product_name": Field
  "battery_level": Field
};

export type device_aux_battery_infoT = {
  "timestamp": Field
  "device_index": Field
  "battery_voltage": Field
  "battery_status": Field
  "battery_identifier": Field
};

export type training_fileT = {
  "timestamp": Field
  "type": Field
  "manufacturer": Field
  "product": Field
  "serial_number": Field
  "time_created": Field
};

export type weather_conditionsT = {
  "timestamp": Field
  "weather_report": Field
  "temperature": Field
  "condition": Field
  "wind_direction": Field
  "wind_speed": Field
  "precipitation_probability": Field
  "temperature_feels_like": Field
  "relative_humidity": Field
  "location": Field
  "observed_at_time": Field
  "observed_location_lat": Field
  "observed_location_long": Field
  "day_of_week": Field
  "high_temperature": Field
  "low_temperature": Field
};

export type weather_alertT = {
  "timestamp": Field
  "report_id": Field
  "issue_time": Field
  "expire_time": Field
  "severity": Field
  "type": Field
};

export type gps_metadataT = {
  "timestamp": Field
  "timestamp_ms": Field
  "position_lat": Field
  "position_long": Field
  "enhanced_altitude": Field
  "enhanced_speed": Field
  "heading": Field
  "utc_timestamp": Field
  "velocity": Field
};

export type camera_eventT = {
  "timestamp": Field
  "timestamp_ms": Field
  "camera_event_type": Field
  "camera_file_uuid": Field
  "camera_orientation": Field
};

export type gyroscope_dataT = {
  "timestamp": Field
  "timestamp_ms": Field
  "sample_time_offset": Field
  "gyro_x": Field
  "gyro_y": Field
  "gyro_z": Field
  "calibrated_gyro_x": Field
  "calibrated_gyro_y": Field
  "calibrated_gyro_z": Field
};

export type accelerometer_dataT = {
  "timestamp": Field
  "timestamp_ms": Field
  "sample_time_offset": Field
  "accel_x": Field
  "accel_y": Field
  "accel_z": Field
  "calibrated_accel_x": Field
  "calibrated_accel_y": Field
  "calibrated_accel_z": Field
  "compressed_calibrated_accel_x": Field
  "compressed_calibrated_accel_y": Field
  "compressed_calibrated_accel_z": Field
};

export type magnetometer_dataT = {
  "timestamp": Field
  "timestamp_ms": Field
  "sample_time_offset": Field
  "mag_x": Field
  "mag_y": Field
  "mag_z": Field
  "calibrated_mag_x": Field
  "calibrated_mag_y": Field
  "calibrated_mag_z": Field
};

export type barometer_dataT = {
  "timestamp": Field
  "timestamp_ms": Field
  "sample_time_offset": Field
  "baro_pres": Field
};

export type three_d_sensor_calibrationT = {
  "timestamp": Field
  "sensor_type": Field
  "calibration_factor": Field
  "calibration_divisor": Field
  "level_shift": Field
  "offset_cal": Field
  "orientation_matrix": Field
};

export type one_d_sensor_calibrationT = {
  "timestamp": Field
  "sensor_type": Field
  "calibration_factor": Field
  "calibration_divisor": Field
  "level_shift": Field
  "offset_cal": Field
};

export type video_frameT = {
  "timestamp": Field
  "timestamp_ms": Field
  "frame_number": Field
};

export type obdii_dataT = {
  "timestamp": Field
  "timestamp_ms": Field
  "time_offset": Field
  "pid": Field
  "raw_data": Field
  "pid_data_size": Field
  "system_time": Field
  "start_timestamp": Field
  "start_timestamp_ms": Field
};

export type nmea_sentenceT = {
  "timestamp": Field
  "timestamp_ms": Field
  "sentence": Field
};

export type aviation_attitudeT = {
  "timestamp": Field
  "timestamp_ms": Field
  "system_time": Field
  "pitch": Field
  "roll": Field
  "accel_lateral": Field
  "accel_normal": Field
  "turn_rate": Field
  "stage": Field
  "attitude_stage_complete": Field
  "track": Field
  "validity": Field
};

export type videoT = {
  "url": Field
  "hosting_provider": Field
  "duration": Field
};

export type video_titleT = {
  "message_index": Field
  "message_count": Field
  "text": Field
};

export type video_descriptionT = {
  "message_index": Field
  "message_count": Field
  "text": Field
};

export type video_clipT = {
  "clip_number": Field
  "start_timestamp": Field
  "start_timestamp_ms": Field
  "end_timestamp": Field
  "end_timestamp_ms": Field
  "clip_start": Field
  "clip_end": Field
};

export type setT = {
  "timestamp": Field
  "duration": Field
  "repetitions": Field
  "weight": Field
  "set_type": Field
  "start_time": Field
  "category": Field
  "category_subtype": Field
  "weight_display_unit": Field
  "message_index": Field
  "wkt_step_index": Field
};

export type jumpT = {
  "timestamp": Field
  "distance": Field
  "height": Field
  "rotations": Field
  "hang_time": Field
  "score": Field
  "position_lat": Field
  "position_long": Field
  "speed": Field
  "enhanced_speed": Field
};

export type climb_proT = {
  "timestamp": Field
  "position_lat": Field
  "position_long": Field
  "climb_pro_event": Field
  "climb_number": Field
  "climb_category": Field
  "current_dist": Field
};

export type field_descriptionT = {
  "developer_data_index": Field
  "field_definition_number": Field
  "fit_base_type_id": Field
  "field_name": Field
  "array": Field
  "components": Field
  "scale": Field
  "offset": Field
  "units": Field
  "bits": Field
  "accumulate": Field
  "fit_base_unit_id": Field
  "native_mesg_num": Field
  "native_field_num": Field
};

export type developer_data_idT = {
  "developer_id": Field
  "application_id": Field
  "manufacturer_id": Field
  "developer_data_index": Field
  "application_version": Field
};

export type courseT = {
  "sport": Field
  "name": Field
  "capabilities": Field
  "sub_sport": Field
};

export type course_pointT = {
  "message_index": Field
  "timestamp": Field
  "position_lat": Field
  "position_long": Field
  "distance": Field
  "type": Field
  "name": Field
  "favorite": Field
};

export type segment_idT = {
  "name": Field
  "uuid": Field
  "sport": Field
  "enabled": Field
  "user_profile_primary_key": Field
  "device_id": Field
  "default_race_leader": Field
  "delete_status": Field
  "selection_type": Field
};

export type segment_leaderboard_entryT = {
  "message_index": Field
  "name": Field
  "type": Field
  "group_primary_key": Field
  "activity_id": Field
  "segment_time": Field
  "activity_id_string": Field
};

export type segment_pointT = {
  "message_index": Field
  "position_lat": Field
  "position_long": Field
  "distance": Field
  "altitude": Field
  "leader_time": Field
};

export type segment_lapT = {
  "message_index": Field
  "timestamp": Field
  "event": Field
  "event_type": Field
  "start_time": Field
  "start_position_lat": Field
  "start_position_long": Field
  "end_position_lat": Field
  "end_position_long": Field
  "total_elapsed_time": Field
  "total_timer_time": Field
  "total_distance": Field
  "total_cycles": Field
  "total_calories": Field
  "total_fat_calories": Field
  "avg_speed": Field
  "max_speed": Field
  "avg_heart_rate": Field
  "max_heart_rate": Field
  "avg_cadence": Field
  "max_cadence": Field
  "avg_power": Field
  "max_power": Field
  "total_ascent": Field
  "total_descent": Field
  "sport": Field
  "event_group": Field
  "nec_lat": Field
  "nec_long": Field
  "swc_lat": Field
  "swc_long": Field
  "name": Field
  "normalized_power": Field
  "left_right_balance": Field
  "sub_sport": Field
  "total_work": Field
  "avg_altitude": Field
  "max_altitude": Field
  "gps_accuracy": Field
  "avg_grade": Field
  "avg_pos_grade": Field
  "avg_neg_grade": Field
  "max_pos_grade": Field
  "max_neg_grade": Field
  "avg_temperature": Field
  "max_temperature": Field
  "total_moving_time": Field
  "avg_pos_vertical_speed": Field
  "avg_neg_vertical_speed": Field
  "max_pos_vertical_speed": Field
  "max_neg_vertical_speed": Field
  "time_in_hr_zone": Field
  "time_in_speed_zone": Field
  "time_in_cadence_zone": Field
  "time_in_power_zone": Field
  "repetition_num": Field
  "min_altitude": Field
  "min_heart_rate": Field
  "active_time": Field
  "wkt_step_index": Field
  "sport_event": Field
  "avg_left_torque_effectiveness": Field
  "avg_right_torque_effectiveness": Field
  "avg_left_pedal_smoothness": Field
  "avg_right_pedal_smoothness": Field
  "avg_combined_pedal_smoothness": Field
  "status": Field
  "uuid": Field
  "avg_fractional_cadence": Field
  "max_fractional_cadence": Field
  "total_fractional_cycles": Field
  "front_gear_shift_count": Field
  "rear_gear_shift_count": Field
  "time_standing": Field
  "stand_count": Field
  "avg_left_pco": Field
  "avg_right_pco": Field
  "avg_left_power_phase": Field
  "avg_left_power_phase_peak": Field
  "avg_right_power_phase": Field
  "avg_right_power_phase_peak": Field
  "avg_power_position": Field
  "max_power_position": Field
  "avg_cadence_position": Field
  "max_cadence_position": Field
  "manufacturer": Field
  "total_grit": Field
  "total_flow": Field
  "avg_grit": Field
  "avg_flow": Field
  "total_fractional_ascent": Field
  "total_fractional_descent": Field
};

export type segment_fileT = {
  "message_index": Field
  "file_uuid": Field
  "enabled": Field
  "user_profile_primary_key": Field
  "leader_type": Field
  "leader_group_primary_key": Field
  "leader_activity_id": Field
  "leader_activity_id_string": Field
  "default_race_leader": Field
};

export type workoutT = {
  "sport": Field
  "capabilities": Field
  "num_valid_steps": Field
  "wkt_name": Field
  "sub_sport": Field
  "pool_length": Field
  "pool_length_unit": Field
};

export type workout_sessionT = {
  "message_index": Field
  "sport": Field
  "sub_sport": Field
  "num_valid_steps": Field
  "first_step_index": Field
  "pool_length": Field
  "pool_length_unit": Field
};

export type workout_stepT = {
  "message_index": Field
  "wkt_step_name": Field
  "duration_type": Field
  "duration_value": Field
  "target_type": Field
  "target_value": Field
  "custom_target_value_low": Field
  "custom_target_value_high": Field
  "intensity": Field
  "notes": Field
  "equipment": Field
  "exercise_category": Field
  "exercise_name": Field
  "exercise_weight": Field
  "weight_display_unit": Field
  "secondary_target_type": Field
  "secondary_target_value": Field
  "secondary_custom_target_value_low": Field
  "secondary_custom_target_value_high": Field
};

export type exercise_titleT = {
  "message_index": Field
  "exercise_category": Field
  "exercise_name": Field
  "wkt_step_name": Field
};

export type scheduleT = {
  "manufacturer": Field
  "product": Field
  "serial_number": Field
  "time_created": Field
  "completed": Field
  "type": Field
  "scheduled_time": Field
};

export type totalsT = {
  "message_index": Field
  "timestamp": Field
  "timer_time": Field
  "distance": Field
  "calories": Field
  "sport": Field
  "elapsed_time": Field
  "sessions": Field
  "active_time": Field
  "sport_index": Field
};

export type weight_scaleT = {
  "timestamp": Field
  "weight": Field
  "percent_fat": Field
  "percent_hydration": Field
  "visceral_fat_mass": Field
  "bone_mass": Field
  "muscle_mass": Field
  "basal_met": Field
  "physique_rating": Field
  "active_met": Field
  "metabolic_age": Field
  "visceral_fat_rating": Field
  "user_profile_index": Field
};

export type blood_pressureT = {
  "timestamp": Field
  "systolic_pressure": Field
  "diastolic_pressure": Field
  "mean_arterial_pressure": Field
  "map_3_sample_mean": Field
  "map_morning_values": Field
  "map_evening_values": Field
  "heart_rate": Field
  "heart_rate_type": Field
  "status": Field
  "user_profile_index": Field
};

export type monitoring_infoT = {
  "timestamp": Field
  "local_timestamp": Field
  "activity_type": Field
  "cycles_to_distance": Field
  "cycles_to_calories": Field
  "resting_metabolic_rate": Field
};

export type monitoringT = {
  "timestamp": Field
  "device_index": Field
  "calories": Field
  "distance": Field
  "cycles": Field
  "active_time": Field
  "activity_type": Field
  "activity_subtype": Field
  "activity_level": Field
  "distance_16": Field
  "cycles_16": Field
  "active_time_16": Field
  "local_timestamp": Field
  "temperature": Field
  "temperature_min": Field
  "temperature_max": Field
  "activity_time": Field
  "active_calories": Field
  "current_activity_type_intensity": Field
  "timestamp_min_8": Field
  "timestamp_16": Field
  "heart_rate": Field
  "intensity": Field
  "duration_min": Field
  "duration": Field
  "ascent": Field
  "descent": Field
  "moderate_activity_minutes": Field
  "vigorous_activity_minutes": Field
};

export type hrT = {
  "timestamp": Field
  "fractional_timestamp": Field
  "time256": Field
  "filtered_bpm": Field
  "event_timestamp": Field
  "event_timestamp_12": Field
};

export type stress_levelT = {
  "stress_level_value": Field
  "stress_level_time": Field
};

export type memo_globT = {
  "part_index": Field
  "memo": Field
  "message_number": Field
  "message_index": Field
};

export type ant_channel_idT = {
  "channel_number": Field
  "device_type": Field
  "device_number": Field
  "transmission_type": Field
  "device_index": Field
};

export type ant_rxT = {
  "timestamp": Field
  "fractional_timestamp": Field
  "mesg_id": Field
  "mesg_data": Field
  "channel_number": Field
  "data": Field
};

export type ant_txT = {
  "timestamp": Field
  "fractional_timestamp": Field
  "mesg_id": Field
  "mesg_data": Field
  "channel_number": Field
  "data": Field
};

export type exd_screen_configurationT = {
  "screen_index": Field
  "field_count": Field
  "layout": Field
  "screen_enabled": Field
};

export type exd_data_field_configurationT = {
  "screen_index": Field
  "concept_field": Field
  "field_id": Field
  "concept_count": Field
  "display_type": Field
  "title": Field
};

export type exd_data_concept_configurationT = {
  "screen_index": Field
  "concept_field": Field
  "field_id": Field
  "concept_index": Field
  "data_page": Field
  "concept_key": Field
  "scaling": Field
  "data_units": Field
  "qualifier": Field
  "descriptor": Field
  "is_signed": Field
};

export type dive_summaryT = {
  "timestamp": Field
  "reference_mesg": Field
  "reference_index": Field
  "avg_depth": Field
  "max_depth": Field
  "surface_interval": Field
  "start_cns": Field
  "end_cns": Field
  "start_n2": Field
  "end_n2": Field
  "o2_toxicity": Field
  "dive_number": Field
  "bottom_time": Field
  "avg_ascent_rate": Field
  "avg_descent_rate": Field
  "max_ascent_rate": Field
  "max_descent_rate": Field
  "hang_time": Field
};

export type hrvT = {
  "time": Field
};